# Real-Time-Chatting-App
This is a Realtime Chat Application uses socket.io library to make a server and client connection where you can chat with your friends globally.

![image](https://user-images.githubusercontent.com/76425862/180037792-8771711c-c03c-4e7a-8da1-ec676d6b1735.png)

There are two javascript file where one is for server.js, which create a server where peers will be connected.

And a client.js, where all the functions are performed for client. Every peer will join, this client file will run for them.

The message is sent by one peer will be broadcast to all connected peers.

The socket will create a pipeline where all the connected and any update from one end will be updated to all connected peer.

![image](https://user-images.githubusercontent.com/76425862/180038524-9694c8e2-882b-4c0e-bc0f-c9016931d722.png)

Every time you join the server, this will ask you about your name you are willing to connect. 

So this is all about this project.

