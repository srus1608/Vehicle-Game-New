# `Scenario And Vehicle CRUD Application`

## About the project

In this project directory, there is an end-to-end CRUD application made with ReactJS. Users can add scenarios and vehicles, and each scenario can have multiple vehicles. Users can read, create, update, and delete scenarios and vehicles. When a scenario is deleted, all vehicles under it will also be deleted.

The application can create, display, update, and delete scenarios and vehicles. A scenario can have multiple vehicles, and vehicles will move when the user clicks a button based on the scenario and vehicle parameters.

On the Home page, users can select the scenarios they have created and start the simulation. When the user clicks the play button, vehicles starts moving based on the direction and speed until the scenario time is over.

The scenario have following fields:
- Scenario id
- Scenario name
- Time

The Vehicle have following fields:
- Vehicle id
- Vehicle name
- Initial Position X
- Initial Position Y
- Speed 
- Direction (can have only Towards, Backwards, Upwards and Downwards).

json-server is used for storing data use.

For animation I have used Framer motion library.

## Live project link

https://scenario-vehicle-debz.netlify.app/

## Preview

![image](https://user-images.githubusercontent.com/67649413/225752761-d4548a20-cf53-46a1-9225-d18519f50c5f.png)
![image](https://user-images.githubusercontent.com/67649413/225752844-302ca0dc-8c7a-4117-b91e-df04729d2940.png)
![image](https://user-images.githubusercontent.com/67649413/225753003-a0393823-927a-491f-8353-94d2363507fb.png)
![image](https://user-images.githubusercontent.com/67649413/225753174-599358a0-4619-4f7b-b60d-dade2a7f7494.png)
![image](https://user-images.githubusercontent.com/67649413/225753206-790208c8-9d07-4ab8-b6aa-794bda3380bc.png)
![image](https://user-images.githubusercontent.com/67649413/225753249-227e532e-3229-48d4-92c6-de5eb9014949.png)

## `Tools Used`

### FRONTEND
- React
- CSS
- Framer motion
### BACKEND
- npm install
- json server
