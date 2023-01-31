
const pets = [
    {name:'Fluffy',age:2,type:'Cat',gender:'male',description:'Fluffy is cool and human friendly',adoptionFee:'$199',imageUrl:'https://media.istockphoto.com/id/1322123064/photo/portrait-of-an-adorable-white-cat-in-sunglasses-and-an-shirt-lies-on-a-fabric-hammock.jpg?s=612x612&w=0&k=20&c=-G6l2c4jNI0y4cenh-t3qxvIQzVCOqOYZNvrRA7ZU5o='},
    {name:'Maxi',age:3,type:'Dog',gender:'female',description:'Maxi is cool and human friendly',adoptionFee:'$199',imageUrl:'https://images.pexels.com/photos/333083/pexels-photo-333083.jpeg?cs=srgb&dl=pexels-adam-kontor-333083.jpg&fm=jpg'},
    {name:'Pixy',age:3,type:'Rabit',gender:'female',description:'Pixy is cool and human friendly',adoptionFee:'$199',imageUrl:'https://images.unsplash.com/photo-1602557496847-11ea01879c87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjByYWJiaXR8ZW58MHx8MHx8&w=1000&q=80'},
    {name:'Drona',age:3,type:'Horse',gender:'male',description:'Drona is fast and furious',adoptionFee:'$199',imageUrl:'https://www.treehugger.com/thmb/kaA2K_9wVzTbPIyCRm3-oZuy6k0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/horse.primary-e9a47e1c486c4fb7bf729e05b59cf0df.jpg'},
    {name:'ruki',age:3,type:'Hamster',gender:'female',description:'Drona is fast and furious',adoptionFee:'$199',imageUrl:'https://c.ndtvimg.com/2022-05/nl9lk88_hamster_625x300_29_May_22.jpg?im=Resize=(1230,900)'},
    {name:'Fluffy',age:2,type:'Cat',gender:'male',description:'Fluffy is cool and human friendly',adoptionFee:'$199',imageUrl:'https://media.istockphoto.com/id/1322123064/photo/portrait-of-an-adorable-white-cat-in-sunglasses-and-an-shirt-lies-on-a-fabric-hammock.jpg?s=612x612&w=0&k=20&c=-G6l2c4jNI0y4cenh-t3qxvIQzVCOqOYZNvrRA7ZU5o='},
    {name:'Maxi',age:3,type:'Dog',gender:'female',description:'Maxi is cool and human friendly',adoptionFee:'$199',imageUrl:'https://images.pexels.com/photos/333083/pexels-photo-333083.jpeg?cs=srgb&dl=pexels-adam-kontor-333083.jpg&fm=jpg'},
    {name:'Pixy',age:3,type:'Rabit',gender:'female',description:'Pixy is cool and human friendly',adoptionFee:'$199',imageUrl:'https://images.unsplash.com/photo-1602557496847-11ea01879c87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjByYWJiaXR8ZW58MHx8MHx8&w=1000&q=80'},
    {name:'Drona',age:3,type:'Horse',gender:'male',description:'Drona is fast and furious',adoptionFee:'$199',imageUrl:'https://www.treehugger.com/thmb/kaA2K_9wVzTbPIyCRm3-oZuy6k0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/horse.primary-e9a47e1c486c4fb7bf729e05b59cf0df.jpg'},
    {name:'ruki',age:3,type:'Hamster',gender:'female',description:'Drona is fast and furious',adoptionFee:'$199',imageUrl:'https://c.ndtvimg.com/2022-05/nl9lk88_hamster_625x300_29_May_22.jpg?im=Resize=(1230,900)'},
    {name:'Fluffy',age:2,type:'Cat',gender:'male',description:'Fluffy is cool and human friendly',adoptionFee:'$199',imageUrl:'https://media.istockphoto.com/id/1322123064/photo/portrait-of-an-adorable-white-cat-in-sunglasses-and-an-shirt-lies-on-a-fabric-hammock.jpg?s=612x612&w=0&k=20&c=-G6l2c4jNI0y4cenh-t3qxvIQzVCOqOYZNvrRA7ZU5o='},
    {name:'Maxi',age:3,type:'Dog',gender:'female',description:'Maxi is cool and human friendly',adoptionFee:'$199',imageUrl:'https://images.pexels.com/photos/333083/pexels-photo-333083.jpeg?cs=srgb&dl=pexels-adam-kontor-333083.jpg&fm=jpg'},
    {name:'Pixy',age:3,type:'Rabit',gender:'female',description:'Pixy is cool and human friendly',adoptionFee:'$199',imageUrl:'https://images.unsplash.com/photo-1602557496847-11ea01879c87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjByYWJiaXR8ZW58MHx8MHx8&w=1000&q=80'},
    {name:'Drona',age:3,type:'Horse',gender:'male',description:'Drona is fast and furious',adoptionFee:'$199',imageUrl:'https://www.treehugger.com/thmb/kaA2K_9wVzTbPIyCRm3-oZuy6k0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/horse.primary-e9a47e1c486c4fb7bf729e05b59cf0df.jpg'},
    {name:'ruki',age:3,type:'Hamster',gender:'female',description:'Drona is fast and furious',adoptionFee:'$199',imageUrl:'https://c.ndtvimg.com/2022-05/nl9lk88_hamster_625x300_29_May_22.jpg?im=Resize=(1230,900)'},
    {name:'Fluffy',age:2,type:'Cat',gender:'male',description:'Fluffy is cool and human friendly',adoptionFee:'$199',imageUrl:'https://media.istockphoto.com/id/1322123064/photo/portrait-of-an-adorable-white-cat-in-sunglasses-and-an-shirt-lies-on-a-fabric-hammock.jpg?s=612x612&w=0&k=20&c=-G6l2c4jNI0y4cenh-t3qxvIQzVCOqOYZNvrRA7ZU5o='},
    {name:'Maxi',age:3,type:'Dog',gender:'female',description:'Maxi is cool and human friendly',adoptionFee:'$199',imageUrl:'https://images.pexels.com/photos/333083/pexels-photo-333083.jpeg?cs=srgb&dl=pexels-adam-kontor-333083.jpg&fm=jpg'},
    {name:'Pixy',age:3,type:'Rabit',gender:'female',description:'Pixy is cool and human friendly',adoptionFee:'$199',imageUrl:'https://images.unsplash.com/photo-1602557496847-11ea01879c87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjByYWJiaXR8ZW58MHx8MHx8&w=1000&q=80'},
    {name:'Drona',age:3,type:'Horse',gender:'male',description:'Drona is fast and furious',adoptionFee:'$199',imageUrl:'https://www.treehugger.com/thmb/kaA2K_9wVzTbPIyCRm3-oZuy6k0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/horse.primary-e9a47e1c486c4fb7bf729e05b59cf0df.jpg'},
    {name:'ruki',age:3,type:'Hamster',gender:'female',description:'Drona is fast and furious',adoptionFee:'$199',imageUrl:'https://c.ndtvimg.com/2022-05/nl9lk88_hamster_625x300_29_May_22.jpg?im=Resize=(1230,900)'},
    {name:'Fluffy',age:2,type:'Cat',gender:'male',description:'Fluffy is cool and human friendly',adoptionFee:'$199',imageUrl:'https://media.istockphoto.com/id/1322123064/photo/portrait-of-an-adorable-white-cat-in-sunglasses-and-an-shirt-lies-on-a-fabric-hammock.jpg?s=612x612&w=0&k=20&c=-G6l2c4jNI0y4cenh-t3qxvIQzVCOqOYZNvrRA7ZU5o='},
    {name:'Maxi',age:3,type:'Dog',gender:'female',description:'Maxi is cool and human friendly',adoptionFee:'$199',imageUrl:'https://images.pexels.com/photos/333083/pexels-photo-333083.jpeg?cs=srgb&dl=pexels-adam-kontor-333083.jpg&fm=jpg'},
    {name:'Pixy',age:3,type:'Rabit',gender:'female',description:'Pixy is cool and human friendly',adoptionFee:'$199',imageUrl:'https://images.unsplash.com/photo-1602557496847-11ea01879c87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjByYWJiaXR8ZW58MHx8MHx8&w=1000&q=80'},
    {name:'Drona',age:3,type:'Horse',gender:'male',description:'Drona is fast and furious',adoptionFee:'$199',imageUrl:'https://www.treehugger.com/thmb/kaA2K_9wVzTbPIyCRm3-oZuy6k0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/horse.primary-e9a47e1c486c4fb7bf729e05b59cf0df.jpg'},
    {name:'ruki',age:3,type:'Hamster',gender:'female',description:'Drona is fast and furious',adoptionFee:'$199',imageUrl:'https://c.ndtvimg.com/2022-05/nl9lk88_hamster_625x300_29_May_22.jpg?im=Resize=(1230,900)'},
    {name:'Fluffy',age:2,type:'Cat',gender:'male',description:'Fluffy is cool and human friendly',adoptionFee:'$199',imageUrl:'https://media.istockphoto.com/id/1322123064/photo/portrait-of-an-adorable-white-cat-in-sunglasses-and-an-shirt-lies-on-a-fabric-hammock.jpg?s=612x612&w=0&k=20&c=-G6l2c4jNI0y4cenh-t3qxvIQzVCOqOYZNvrRA7ZU5o='},
    {name:'Maxi',age:3,type:'Dog',gender:'female',description:'Maxi is cool and human friendly',adoptionFee:'$199',imageUrl:'https://images.pexels.com/photos/333083/pexels-photo-333083.jpeg?cs=srgb&dl=pexels-adam-kontor-333083.jpg&fm=jpg'},
    {name:'Pixy',age:3,type:'Rabit',gender:'female',description:'Pixy is cool and human friendly',adoptionFee:'$199',imageUrl:'https://images.unsplash.com/photo-1602557496847-11ea01879c87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjByYWJiaXR8ZW58MHx8MHx8&w=1000&q=80'},
    {name:'Drona',age:3,type:'Horse',gender:'male',description:'Drona is fast and furious',adoptionFee:'$199',imageUrl:'https://www.treehugger.com/thmb/kaA2K_9wVzTbPIyCRm3-oZuy6k0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/horse.primary-e9a47e1c486c4fb7bf729e05b59cf0df.jpg'},
    {name:'ruki',age:3,type:'Hamster',gender:'female',description:'Drona is fast and furious',adoptionFee:'$199',imageUrl:'https://c.ndtvimg.com/2022-05/nl9lk88_hamster_625x300_29_May_22.jpg?im=Resize=(1230,900)'},
    {name:'Fluffy',age:2,type:'Cat',gender:'male',description:'Fluffy is cool and human friendly',adoptionFee:'$199',imageUrl:'https://media.istockphoto.com/id/1322123064/photo/portrait-of-an-adorable-white-cat-in-sunglasses-and-an-shirt-lies-on-a-fabric-hammock.jpg?s=612x612&w=0&k=20&c=-G6l2c4jNI0y4cenh-t3qxvIQzVCOqOYZNvrRA7ZU5o='},
    {name:'Maxi',age:3,type:'Dog',gender:'female',description:'Maxi is cool and human friendly',adoptionFee:'$199',imageUrl:'https://images.pexels.com/photos/333083/pexels-photo-333083.jpeg?cs=srgb&dl=pexels-adam-kontor-333083.jpg&fm=jpg'},
    {name:'Pixy',age:3,type:'Rabit',gender:'female',description:'Pixy is cool and human friendly',adoptionFee:'$199',imageUrl:'https://images.unsplash.com/photo-1602557496847-11ea01879c87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjByYWJiaXR8ZW58MHx8MHx8&w=1000&q=80'},
    {name:'Drona',age:3,type:'Horse',gender:'male',description:'Drona is fast and furious',adoptionFee:'$199',imageUrl:'https://www.treehugger.com/thmb/kaA2K_9wVzTbPIyCRm3-oZuy6k0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/horse.primary-e9a47e1c486c4fb7bf729e05b59cf0df.jpg'},
    {name:'ruki',age:3,type:'Hamster',gender:'female',description:'Drona is fast and furious',adoptionFee:'$199',imageUrl:'https://c.ndtvimg.com/2022-05/nl9lk88_hamster_625x300_29_May_22.jpg?im=Resize=(1230,900)'},
    {name:'Fluffy',age:2,type:'Cat',gender:'male',description:'Fluffy is cool and human friendly',adoptionFee:'$199',imageUrl:'https://media.istockphoto.com/id/1322123064/photo/portrait-of-an-adorable-white-cat-in-sunglasses-and-an-shirt-lies-on-a-fabric-hammock.jpg?s=612x612&w=0&k=20&c=-G6l2c4jNI0y4cenh-t3qxvIQzVCOqOYZNvrRA7ZU5o='},
    {name:'Maxi',age:3,type:'Dog',gender:'female',description:'Maxi is cool and human friendly',adoptionFee:'$199',imageUrl:'https://images.pexels.com/photos/333083/pexels-photo-333083.jpeg?cs=srgb&dl=pexels-adam-kontor-333083.jpg&fm=jpg'},
    {name:'Pixy',age:3,type:'Rabit',gender:'female',description:'Pixy is cool and human friendly',adoptionFee:'$199',imageUrl:'https://images.unsplash.com/photo-1602557496847-11ea01879c87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjByYWJiaXR8ZW58MHx8MHx8&w=1000&q=80'},
    {name:'Drona',age:3,type:'Horse',gender:'male',description:'Drona is fast and furious',adoptionFee:'$199',imageUrl:'https://www.treehugger.com/thmb/kaA2K_9wVzTbPIyCRm3-oZuy6k0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/horse.primary-e9a47e1c486c4fb7bf729e05b59cf0df.jpg'},
    {name:'ruki',age:3,type:'Hamster',gender:'female',description:'Drona is fast and furious',adoptionFee:'$199',imageUrl:'https://c.ndtvimg.com/2022-05/nl9lk88_hamster_625x300_29_May_22.jpg?im=Resize=(1230,900)'},
    {name:'Fluffy',age:2,type:'Cat',gender:'male',description:'Fluffy is cool and human friendly',adoptionFee:'$199',imageUrl:'https://media.istockphoto.com/id/1322123064/photo/portrait-of-an-adorable-white-cat-in-sunglasses-and-an-shirt-lies-on-a-fabric-hammock.jpg?s=612x612&w=0&k=20&c=-G6l2c4jNI0y4cenh-t3qxvIQzVCOqOYZNvrRA7ZU5o='},
    {name:'Maxi',age:3,type:'Dog',gender:'female',description:'Maxi is cool and human friendly',adoptionFee:'$199',imageUrl:'https://images.pexels.com/photos/333083/pexels-photo-333083.jpeg?cs=srgb&dl=pexels-adam-kontor-333083.jpg&fm=jpg'},
    {name:'Pixy',age:3,type:'Rabit',gender:'female',description:'Pixy is cool and human friendly',adoptionFee:'$199',imageUrl:'https://images.unsplash.com/photo-1602557496847-11ea01879c87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjByYWJiaXR8ZW58MHx8MHx8&w=1000&q=80'},
    {name:'Drona',age:3,type:'Horse',gender:'male',description:'Drona is fast and furious',adoptionFee:'$199',imageUrl:'https://www.treehugger.com/thmb/kaA2K_9wVzTbPIyCRm3-oZuy6k0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/horse.primary-e9a47e1c486c4fb7bf729e05b59cf0df.jpg'},
    {name:'ruki',age:3,type:'Hamster',gender:'female',description:'Drona is fast and furious',adoptionFee:'$199',imageUrl:'https://c.ndtvimg.com/2022-05/nl9lk88_hamster_625x300_29_May_22.jpg?im=Resize=(1230,900)'},
    {name:'Fluffy',age:2,type:'Cat',gender:'male',description:'Fluffy is cool and human friendly',adoptionFee:'$199',imageUrl:'https://media.istockphoto.com/id/1322123064/photo/portrait-of-an-adorable-white-cat-in-sunglasses-and-an-shirt-lies-on-a-fabric-hammock.jpg?s=612x612&w=0&k=20&c=-G6l2c4jNI0y4cenh-t3qxvIQzVCOqOYZNvrRA7ZU5o='},
    {name:'Maxi',age:3,type:'Dog',gender:'female',description:'Maxi is cool and human friendly',adoptionFee:'$199',imageUrl:'https://images.pexels.com/photos/333083/pexels-photo-333083.jpeg?cs=srgb&dl=pexels-adam-kontor-333083.jpg&fm=jpg'},
    {name:'Pixy',age:3,type:'Rabit',gender:'female',description:'Pixy is cool and human friendly',adoptionFee:'$199',imageUrl:'https://images.unsplash.com/photo-1602557496847-11ea01879c87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjByYWJiaXR8ZW58MHx8MHx8&w=1000&q=80'},
    {name:'Drona',age:3,type:'Horse',gender:'male',description:'Drona is fast and furious',adoptionFee:'$199',imageUrl:'https://www.treehugger.com/thmb/kaA2K_9wVzTbPIyCRm3-oZuy6k0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/horse.primary-e9a47e1c486c4fb7bf729e05b59cf0df.jpg'},
    {name:'ruki',age:3,type:'Hamster',gender:'female',description:'Drona is fast and furious',adoptionFee:'$199',imageUrl:'https://c.ndtvimg.com/2022-05/nl9lk88_hamster_625x300_29_May_22.jpg?im=Resize=(1230,900)'},
    {name:'Fluffy',age:2,type:'Cat',gender:'male',description:'Fluffy is cool and human friendly',adoptionFee:'$199',imageUrl:'https://media.istockphoto.com/id/1322123064/photo/portrait-of-an-adorable-white-cat-in-sunglasses-and-an-shirt-lies-on-a-fabric-hammock.jpg?s=612x612&w=0&k=20&c=-G6l2c4jNI0y4cenh-t3qxvIQzVCOqOYZNvrRA7ZU5o='},
    {name:'Maxi',age:3,type:'Dog',gender:'female',description:'Maxi is cool and human friendly',adoptionFee:'$199',imageUrl:'https://images.pexels.com/photos/333083/pexels-photo-333083.jpeg?cs=srgb&dl=pexels-adam-kontor-333083.jpg&fm=jpg'},
    {name:'Pixy',age:3,type:'Rabit',gender:'female',description:'Pixy is cool and human friendly',adoptionFee:'$199',imageUrl:'https://images.unsplash.com/photo-1602557496847-11ea01879c87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjByYWJiaXR8ZW58MHx8MHx8&w=1000&q=80'},
    {name:'Drona',age:3,type:'Horse',gender:'male',description:'Drona is fast and furious',adoptionFee:'$199',imageUrl:'https://www.treehugger.com/thmb/kaA2K_9wVzTbPIyCRm3-oZuy6k0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/horse.primary-e9a47e1c486c4fb7bf729e05b59cf0df.jpg'},
    {name:'ruki',age:3,type:'Hamster',gender:'female',description:'Drona is fast and furious',adoptionFee:'$199',imageUrl:'https://c.ndtvimg.com/2022-05/nl9lk88_hamster_625x300_29_May_22.jpg?im=Resize=(1230,900)'},
    {name:'Fluffy',age:2,type:'Cat',gender:'male',description:'Fluffy is cool and human friendly',adoptionFee:'$199',imageUrl:'https://media.istockphoto.com/id/1322123064/photo/portrait-of-an-adorable-white-cat-in-sunglasses-and-an-shirt-lies-on-a-fabric-hammock.jpg?s=612x612&w=0&k=20&c=-G6l2c4jNI0y4cenh-t3qxvIQzVCOqOYZNvrRA7ZU5o='},
    {name:'Maxi',age:3,type:'Dog',gender:'female',description:'Maxi is cool and human friendly',adoptionFee:'$199',imageUrl:'https://images.pexels.com/photos/333083/pexels-photo-333083.jpeg?cs=srgb&dl=pexels-adam-kontor-333083.jpg&fm=jpg'},
    {name:'Pixy',age:3,type:'Rabit',gender:'female',description:'Pixy is cool and human friendly',adoptionFee:'$199',imageUrl:'https://images.unsplash.com/photo-1602557496847-11ea01879c87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjByYWJiaXR8ZW58MHx8MHx8&w=1000&q=80'},
    {name:'Drona',age:3,type:'Horse',gender:'male',description:'Drona is fast and furious',adoptionFee:'$199',imageUrl:'https://www.treehugger.com/thmb/kaA2K_9wVzTbPIyCRm3-oZuy6k0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/horse.primary-e9a47e1c486c4fb7bf729e05b59cf0df.jpg'},
    {name:'ruki',age:3,type:'Hamster',gender:'female',description:'Drona is fast and furious',adoptionFee:'$199',imageUrl:'https://c.ndtvimg.com/2022-05/nl9lk88_hamster_625x300_29_May_22.jpg?im=Resize=(1230,900)'},
    {name:'Fluffy',age:2,type:'Cat',gender:'male',description:'Fluffy is cool and human friendly',adoptionFee:'$199',imageUrl:'https://media.istockphoto.com/id/1322123064/photo/portrait-of-an-adorable-white-cat-in-sunglasses-and-an-shirt-lies-on-a-fabric-hammock.jpg?s=612x612&w=0&k=20&c=-G6l2c4jNI0y4cenh-t3qxvIQzVCOqOYZNvrRA7ZU5o='},
    {name:'Maxi',age:3,type:'Dog',gender:'female',description:'Maxi is cool and human friendly',adoptionFee:'$199',imageUrl:'https://images.pexels.com/photos/333083/pexels-photo-333083.jpeg?cs=srgb&dl=pexels-adam-kontor-333083.jpg&fm=jpg'},
    {name:'Pixy',age:3,type:'Rabit',gender:'female',description:'Pixy is cool and human friendly',adoptionFee:'$199',imageUrl:'https://images.unsplash.com/photo-1602557496847-11ea01879c87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjByYWJiaXR8ZW58MHx8MHx8&w=1000&q=80'},
    {name:'Drona',age:3,type:'Horse',gender:'male',description:'Drona is fast and furious',adoptionFee:'$199',imageUrl:'https://www.treehugger.com/thmb/kaA2K_9wVzTbPIyCRm3-oZuy6k0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/horse.primary-e9a47e1c486c4fb7bf729e05b59cf0df.jpg'},
    {name:'ruki',age:3,type:'Hamster',gender:'female',description:'Drona is fast and furious',adoptionFee:'$199',imageUrl:'https://c.ndtvimg.com/2022-05/nl9lk88_hamster_625x300_29_May_22.jpg?im=Resize=(1230,900)'},
    {name:'Fluffy',age:2,type:'Cat',gender:'male',description:'Fluffy is cool and human friendly',adoptionFee:'$199',imageUrl:'https://media.istockphoto.com/id/1322123064/photo/portrait-of-an-adorable-white-cat-in-sunglasses-and-an-shirt-lies-on-a-fabric-hammock.jpg?s=612x612&w=0&k=20&c=-G6l2c4jNI0y4cenh-t3qxvIQzVCOqOYZNvrRA7ZU5o='},
    {name:'Maxi',age:3,type:'Dog',gender:'female',description:'Maxi is cool and human friendly',adoptionFee:'$199',imageUrl:'https://images.pexels.com/photos/333083/pexels-photo-333083.jpeg?cs=srgb&dl=pexels-adam-kontor-333083.jpg&fm=jpg'},
    {name:'Pixy',age:3,type:'Rabit',gender:'female',description:'Pixy is cool and human friendly',adoptionFee:'$199',imageUrl:'https://images.unsplash.com/photo-1602557496847-11ea01879c87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjByYWJiaXR8ZW58MHx8MHx8&w=1000&q=80'},
    {name:'Drona',age:3,type:'Horse',gender:'male',description:'Drona is fast and furious',adoptionFee:'$199',imageUrl:'https://www.treehugger.com/thmb/kaA2K_9wVzTbPIyCRm3-oZuy6k0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/horse.primary-e9a47e1c486c4fb7bf729e05b59cf0df.jpg'},
    {name:'ruki',age:3,type:'Hamster',gender:'female',description:'Drona is fast and furious',adoptionFee:'$199',imageUrl:'https://c.ndtvimg.com/2022-05/nl9lk88_hamster_625x300_29_May_22.jpg?im=Resize=(1230,900)'},
    {name:'Fluffy',age:2,type:'Cat',gender:'male',description:'Fluffy is cool and human friendly',adoptionFee:'$199',imageUrl:'https://media.istockphoto.com/id/1322123064/photo/portrait-of-an-adorable-white-cat-in-sunglasses-and-an-shirt-lies-on-a-fabric-hammock.jpg?s=612x612&w=0&k=20&c=-G6l2c4jNI0y4cenh-t3qxvIQzVCOqOYZNvrRA7ZU5o='},
    {name:'Maxi',age:3,type:'Dog',gender:'female',description:'Maxi is cool and human friendly',adoptionFee:'$199',imageUrl:'https://images.pexels.com/photos/333083/pexels-photo-333083.jpeg?cs=srgb&dl=pexels-adam-kontor-333083.jpg&fm=jpg'},
    {name:'Pixy',age:3,type:'Rabit',gender:'female',description:'Pixy is cool and human friendly',adoptionFee:'$199',imageUrl:'https://images.unsplash.com/photo-1602557496847-11ea01879c87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjByYWJiaXR8ZW58MHx8MHx8&w=1000&q=80'},
    {name:'Drona',age:3,type:'Horse',gender:'male',description:'Drona is fast and furious',adoptionFee:'$199',imageUrl:'https://www.treehugger.com/thmb/kaA2K_9wVzTbPIyCRm3-oZuy6k0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/horse.primary-e9a47e1c486c4fb7bf729e05b59cf0df.jpg'},
    {name:'ruki',age:3,type:'Hamster',gender:'female',description:'Drona is fast and furious',adoptionFee:'$199',imageUrl:'https://c.ndtvimg.com/2022-05/nl9lk88_hamster_625x300_29_May_22.jpg?im=Resize=(1230,900)'},
    {name:'Fluffy',age:2,type:'Cat',gender:'male',description:'Fluffy is cool and human friendly',adoptionFee:'$199',imageUrl:'https://media.istockphoto.com/id/1322123064/photo/portrait-of-an-adorable-white-cat-in-sunglasses-and-an-shirt-lies-on-a-fabric-hammock.jpg?s=612x612&w=0&k=20&c=-G6l2c4jNI0y4cenh-t3qxvIQzVCOqOYZNvrRA7ZU5o='},
    {name:'Maxi',age:3,type:'Dog',gender:'female',description:'Maxi is cool and human friendly',adoptionFee:'$199',imageUrl:'https://images.pexels.com/photos/333083/pexels-photo-333083.jpeg?cs=srgb&dl=pexels-adam-kontor-333083.jpg&fm=jpg'},
    {name:'Pixy',age:3,type:'Rabit',gender:'female',description:'Pixy is cool and human friendly',adoptionFee:'$199',imageUrl:'https://images.unsplash.com/photo-1602557496847-11ea01879c87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjByYWJiaXR8ZW58MHx8MHx8&w=1000&q=80'},
    {name:'Drona',age:3,type:'Horse',gender:'male',description:'Drona is fast and furious',adoptionFee:'$199',imageUrl:'https://www.treehugger.com/thmb/kaA2K_9wVzTbPIyCRm3-oZuy6k0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/horse.primary-e9a47e1c486c4fb7bf729e05b59cf0df.jpg'},
    {name:'ruki',age:3,type:'Hamster',gender:'female',description:'Drona is fast and furious',adoptionFee:'$199',imageUrl:'https://c.ndtvimg.com/2022-05/nl9lk88_hamster_625x300_29_May_22.jpg?im=Resize=(1230,900)'},

]

let petsData;
let petList = document.getElementById('pets-list');
let petDetails = document.getElementById('pet-details');
let i = 0; //  global variable to mainatain the index of pets array
let scrollValue = 1082;// value in pixels of the when scrolled down to 20th item


async function getData(){
    
    //********** We can use the below approach to get the data through API, 
    // which is fed by our local server on the machine ********/

    // let res =  await fetch('http://localhost:8000/data')
    // petsData = await res.json();
    // petsData = petsData.data.dogData.data;
    
    
    // since no data available from cloud, source and was unable to host the local node server 
    petsData = pets;

    // adding the scroll event listener to continuosly add the items into the pets list,
    petList.addEventListener('scroll',function(){
        const scrollTop = petList.scrollTop;
        if(scrollTop>=scrollValue){
            scrollValue *=  2;;
            addMorePets();
        }
    });
    
    // as soon as the page is initially loaded, getting the first 20 entries from full list of dogs
    function onLoad(){
        for(;i<20;i++){
            let pet = petsData[i];
            let item = document.createElement('li');
            item.setAttribute('class','pet-item');
            item.innerHTML = `<img class='pet-image' src=${pet.imageUrl} alt=${pet.name}> <div class="pet-info"> <span> Pet Name : ${pet.name} </span> <span> Age: ${pet.age} years</span> </div>`;
            petList.append(item);
            item.addEventListener('click',function(){getMoreDetails(pet)});
        }
    }
    
    // add more posts functions to add more posts as and when the scrolled to bottom of the list div
    function addMorePets(){
       
        if(i<petsData.length){
            let size = i + 20;
            for(;i<size && i<petsData.length;i++){
                let pet = petsData[i];
                let item = document.createElement('li');
                item.setAttribute('class','pet-item');
                item.innerHTML = `<img class='pet-image' src=${pet.imageUrl} alt=${pet.name}> <div class="pet-info"> <span> ${pet.name} </span> <span>Age: ${pet.age} years</span> </div>`;
                petList.append(item);
                item.addEventListener('click',function(){getMoreDetails(pet)});
            }
        }
    }
    
    // function to get more details of pet which is selected.
    function getMoreDetails(pet){
        petDetails.style.display = "flex"
        document.getElementById('pet-name').innerHTML = pet.name;
        document.getElementById("pet-type").innerText = pet.type;
        document.getElementById("pet-gender").innerText = pet.gender;
        document.getElementById("pet-age").innerText = pet.age + " years";
        document.getElementById("pet-description").innerText = pet.description;
        document.getElementById("image").setAttribute('src',pet.imageUrl);
        document.getElementById("image").setAttribute('alt',pet.name);
    }
    
    onLoad();
};


// calling this function as soon as the page loads.
getData();




