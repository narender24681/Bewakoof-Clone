import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { Button, Center, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure, useToast } from '@chakra-ui/react';
import axios from 'axios';

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const [usersList, setUsersList] = useState([]);
  const [clickedNext, setClickedNext] = useState(false);
  const [isUserPresent, setIsUserPresent] = useState(false);
  const toast = useToast();

  useEffect(() => {
    fetchUsers();
  }, []);

  function fetchUsers() {
    axios.get(`http://localhost:8080/users`)
    .then(res => {
        // console.log(res.data);
        setUsersList(res.data);
    })
    .catch(err => {
        console.log(err);
    })
  }

//   console.log(usersList);
//   console.log(email);

  const handleNextBtn = () => {
    setClickedNext(true);

    for (let i = 0; i < usersList.length; i++) {
        // console.log(usersList[i].email);

        if (usersList[i].email == email) {
            setIsUserPresent(true);
            break;
        }
    }
  }

  const handleSignupBtn = () => {
    console.log(email, firstName, lastName, password);

    axios({
        method: "post",
        url: `http://localhost:8080/users`,
        data: {
            email: email,
            firstName: firstName,
            lastName: lastName,
            password: password
        }
    })
    .then(res => {
        // console.log(res.data);
        onClose();
        
        setIsAuth(true);

        toast({
            title: 'Account created successfully.',
            status: 'success',
            duration: 3000,
            isClosable: true,
        });
    })
    .catch(err => {
        console.log(err);
    })
  }

  const handleLoginBtn = () => {
    for (let i = 0; i < usersList.length; i++) {
        // console.log(usersList[i].email, usersList[i].password);
        
        if (usersList[i].email == email && usersList[i].password == password) {
            setFirstName(usersList[i].firstName);
            setIsAuth(true);
            break;
        }
        
    }
    
    onClose();

    toast({
        title: 'Loggedin successfully.',
        status: 'success',
        duration: 3000,
        isClosable: true,
    });
  }

  return (
    <div id="navbar-main-container">
      <div id="navbar-container">
        <div id="navbar-logo-links">
          <div id="navbar-logo">
            <Link to="/"><img src="/icon1.jpg" alt="" /></Link>
          </div>
          <div id="navbar-links1">
            <p><Link to="/mens-clothing">MEN</Link></p>
            <p><Link to="">WOMEN</Link></p>
            <p><Link to="">ACCESSORIES</Link></p>
          </div>
        </div>
        <div id="navbar-search-links">
          <div id="navbar-search">
            <input type="text" placeholder='Search by product' />
          </div>
          <div id="navbar-links2">
            <p onClick={onOpen} id="navbar-login">{isAuth ? firstName : "Login"}</p>
            <p><Link to="/cart">Cart</Link></p>
            <img src="https://images.bewakoof.com/web/india-flag-round-1639566913.png" alt="" />
          </div>
        </div>
      </div>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login / Signup</ModalHeader>
          <ModalCloseButton />

          <ModalBody pb={6}>
            {clickedNext ? 
              isUserPresent ?
                <div>
                  <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Password</FormLabel>
                    <Input onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' />
                  </FormControl>

                  <Center>
                    <Button onClick={handleLoginBtn} colorScheme="teal" mt={5}>Log in</Button>
                  </Center>
                </div> 
                :
                <div>
                  <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>First Name</FormLabel>
                    <Input onChange={(e) => setFirstName(e.target.value)} type='text' placeholder='First Name' />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Last Name</FormLabel>
                    <Input onChange={(e) => setLastName(e.target.value)} type='text' placeholder='Last Name' />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Password</FormLabel>
                    <Input onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' />
                  </FormControl>

                  <Center>
                    <Button onClick={handleSignupBtn} colorScheme="teal" mt={5}>Sign Up</Button>
                  </Center>
                </div> 
            : 
            <div>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' />
              </FormControl>

              <Center>
                <Button onClick={handleNextBtn} colorScheme="teal" mt={5}>Next</Button>
              </Center>
            </div>
            }


            
          </ModalBody>

        </ModalContent>
      </Modal>
    </div>
  )
}
