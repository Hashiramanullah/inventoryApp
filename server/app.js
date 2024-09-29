const express = require('express');
const app = express();
 const path = require('path');
 const bcrypt = require('bcrypt');
 const jwt = require('jsonwebtoken');
 const cookieParser = require('cookie-parser');
 const cors = require('cors'); 
const user = require('./models/user');
const { decode } = require('punycode');
app.set('view engine','ejs');


app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

 app.use(express.static(path.join(__dirname,'public')));
 app.use(express.json());
 app.use(express.urlencoded({extended:true}));
 app.use(cookieParser());
 

// (async () => {
//   try {
//     await sql.connect(config);
//     const result = await sql.query`SELECT * FROM Users`; // Using template literals for the query
//     console.dir(result);
//   } catch (err) {
//     console.error("Error during SQL operation: ", err);
//   }
// })();





 app.post('/register', async (req, res) => {
    try {
      const { name, password, number } = req.body;
  
      // console.log('Received Data:', req.body); 
       // Log received data for debugging
  
      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      // Create user in the database
      const createdUser = await user.create({
        name,
        number,
        password: hashedPassword,
      });
  
      // Generate JWT token
      const token = jwt.sign({ number, name }, 'shhh');
  
      // Send token as cookie
      res.cookie('token', token, {
        httpOnly: true,
        secure: false,  // Set true if using HTTPS in production
        sameSite: 'Lax',
      });
  
      // Log the token and response
      // console.log('Token Sent:', token);
      res.json({ success: true, createdUser, token });
    } catch (err) {
      console.error('Error creating user:', err);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  })


// const { sql, poolPromise } = require('./mssql/db/db'); 
// Import the SQL connection



// Register Route
// app.post('/register', async (req, res) => {
//     try {
//         const { name, password, number } = req.body;

//         // Hash the password
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt);

//         // Create user in the SQL database
//         const pool = await poolPromise;
//         const result = await pool.request()
//             .input('name', sql.VarChar, name)
//             .input('number', sql.VarChar, number)
//             .input('password', sql.VarChar, hashedPassword)
//             .query(`INSERT INTO Users (name, number, password) 
//                     VALUES (@name, @number, @password)`);

//         // Generate JWT token
//         const token = jwt.sign({ number, name }, 'shhh');

//         // Send token as cookie
//         res.cookie('token', token, {
//             httpOnly: true,
//             secure: false,  // Set true if using HTTPS in production
//             sameSite: 'Lax',
//         });

//         res.json({ success: true, message: 'User registered successfully', token });
//     } catch (err) {
//         console.error('Error creating user:', err);
//         res.status(500).json({ success: false, message: 'Internal Server Error' });
//     }
// });



app.post('/login', async (req, res) => {
    function normalizePhoneNumber(number) {
        return number.replace(/\D/g, ''); // Remove all non-digit characters
    }

    function isAdminPhoneNumber(number) {
        const adminNumber = '923271431584'; // The full admin number
        
        // Check if the normalized number matches the criteria for an admin number
        return adminNumber.includes(number);
    }

    const { number, password } = req.body;
    const normalizedNumber = normalizePhoneNumber(number); // Normalize the number

    try {
        const findUser = await user.findOne({ number: normalizedNumber });
        console.log('User found:', findUser);

        if (!findUser) {
            res.json({
                success: false,
                message: 'User not found',
            });
        } else {
            bcrypt.compare(password, findUser.password, (err, result) => {
                if (err) {
                    console.error('Error comparing passwords:', err);
                    res.status(500).json({
                        success: false,
                        message: 'Internal server error',
                    });
                    return;
                }

                if (result) {
                    const token = jwt.sign({ number: findUser.number }, 'shhh', { expiresIn: '1h' });
                    res.cookie('token', token, {
                        httpOnly: true,
                        secure: false,
                        sameSite: 'Lax',
                    });

                    // Determine user type based on phone number
                    const isAdmin = isAdminPhoneNumber(normalizedNumber);

                    res.json({
                        success: true,
                        token,
                        number: `+${findUser.number}`,
                        userType: isAdmin ? 'admin' : 'user', // Send user type in response
                        maxAge: 3600000,
                    });
                } else {
                    res.json({
                        success: false,
                        message: 'Invalid password',
                    });
                }
            });
        }
    } catch (err) {
        console.error('Error during login:', err);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
})



const isAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({ success: false, message: 'No token provided' });
    }

    const decoded = jwt.verify(token, 'shhh');
    // console.log(decoded);

    // Find user by the normalized number
    const finduser = await user.findOne({ number: decoded.number }); // Pass an object with the number
    // console.log(finduser);

    if (!finduser || finduser.name !== 'admin') {
      return res.status(403).json({ success: false, message: 'Access denied' });
    }

    next(); // User is admin, proceed
  } catch (error) {
    console.error('Admin check failed:', error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Define the route to check admin status
app.get('/admin', isAdmin, (req, res) => {
  res.json({ success: true, message: 'Admin access granted' });
});
// app.post('/login', async (req, res) => {
//   const { number, password } = req.body;

//   try {
//       // Connect to SQL Server and find user by number
//       const pool = await poolPromise;
//       const result = await pool.request()
//           .input('number', sql.VarChar, number)
//           .query('SELECT * FROM Users WHERE number = @number');

//       const findUser = result.recordset[0]; // SQL Server returns an array of records
//       if (!findUser) {
//           return res.json({ success: false, message: 'User not found' });
//       }

//       // Compare password with hashed password
//       const isPasswordMatch = await bcrypt.compare(password, findUser.password);
//       if (!isPasswordMatch) {
//           return res.json({ success: false, message: 'Invalid password' });
//       }

//       // Generate JWT token
//       const token = jwt.sign({ number: findUser.number }, 'shhh', { expiresIn: '1h' });
//       res.cookie('token', token, {
//           httpOnly: true,
//           secure: false,
//           sameSite: 'Lax',
//       });

//       // Determine user type based on phone number
//       const isAdmin = isAdminPhoneNumber(findUser.number);

//       res.json({
//           success: true,
//           token,
//           number: findUser.number,
//           userType: isAdmin ? 'admin' : 'user',
//       });
//   } catch (err) {
//       console.error('Error during login:', err);
//       res.status(500).json({ success: false, message: 'Internal server error' });
//   }
// });


const isLoggedIn = (req, res, next) => {
    try {
      const token = req.cookies.token;
      
      // If the token is missing or empty
      if (!token) {
        return res.redirect('/login');
      }else{
        res.json({success:true})
      }
  
      // Verify the token and attach user data to the request object
      const data = jwt.verify(token, 'shhh');
      req.user = data;
      console.log('data profile wala');
      
      // Continue to the next middleware or route
      next();
    } catch (error) {
      console.error('JWT verification failed:', error);
      return res.redirect('/login');
    }
  };
  
  
//  const isLoggedIn = (req, res, next) => {
//     console.log(req.cookies.token);
    
//     if(req.cookies.token == ''){
//         res.redirect('/');

//     }else{
//       const data =   jwt.verify(req.cookies.token,'shhh');
//       req.user = data;
//       res.json({success:true});
//     //   res.redirect('/profile')
//     }
//     console.log(req.cookies);
//     next()
//     // try {
//         // const token = req.cookies.token;
//         // if (!token) {
//         //     return res.redirect('/');
//         // }
//         // else{
//         //     const data = jwt.verify(token, 'shhh'); // 'shhh' should be replaced with an environment variable or configuration
//         //     req.user = data;
//         //     next();
//         // }
        
        
//     // } 
//     // catch (error) {
//         // console.error("JWT verification failed:", error);
//         // res.redirect('/');
//     // }
// };

// Example Express route for profile
app.get('/profile', isLoggedIn, (req, res) => {
    // If the middleware has passed, the user is authenticated
    res.json({
      success: true,
      message: 'User is authenticated',
    });
  });
  


 
  app.post('/logout', (req, res) => {
    // Clear the token cookie
    res.clearCookie('token', {
      httpOnly: true,
      secure: true,       // Use in production
      sameSite: 'Lax'
    });
    
    // Send response
    res.status(200).json({ message: 'Logout successful' });
  });
  
  
app.listen(8989);