import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const recipes = [
    {
        name: 'Spaghetti Carbonara',
        origin: 'Italy',
        ingredients: ['Spaghetti', 'Eggs', 'Pancetta', 'Parmesan Cheese', 'Black Pepper'],
        rating: 4.8,
        image: 'https://leitesculinaria.com/wp-content/uploads/2024/04/spaghetti-carbonara-1200.jpg', // Replace with actual image URL
    },
    {
        name: 'Chicken Tikka Masala',
        origin: 'India',
        ingredients: ['Chicken', 'Yogurt', 'Tomatoes', 'Garlic', 'Ginger', 'Spices'],
        rating: 4.7,
        image: 'https://www.seriouseats.com/thmb/DbQHUK2yNCALBnZE-H1M2AKLkok=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chicken-tikka-masala-for-the-grill-recipe-hero-2_1-cb493f49e30140efbffec162d5f2d1d7.JPG',
    },
    {
        name: 'Sushi',
        origin: 'Japan',
        ingredients: ['Sushi Rice', 'Nori', 'Raw Fish', 'Vegetables', 'Soy Sauce'],
        rating: 4.9,
        image: 'https://img.taste.com.au/lNnNoTvU/taste/2010/01/sushi-187034-1.jpg',
    },
    {
        name: 'Tacos',
        origin: 'Mexico',
        ingredients: ['Tortillas', 'Beef', 'Onion', 'Cilantro', 'Lime'],
        rating: 4.6,
        image: 'https://danosseasoning.com/wp-content/uploads/2022/03/Beef-Tacos-1024x767.jpg',
    },
    {
        name: 'Croissant',
        origin: 'France',
        ingredients: ['Flour', 'Butter', 'Sugar', 'Yeast', 'Milk'],
        rating: 4.8,
        image: 'https://images.ricardocuisine.com/services/recipes/croissant1.jpg',
    },
    {
        name: 'Pad Thai',
        origin: 'Thailand',
        ingredients: ['Rice Noodles', 'Shrimp', 'Tofu', 'Peanuts', 'Egg'],
        rating: 4.7,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDNL6ry86eLMZRXXs9YEknliiRYp61AZnv3Q&s',
    },
    {
        name: 'Peking Duck',
        origin: 'China',
        ingredients: ['Duck', 'Scallions', 'Cucumber', 'Hoisin Sauce', 'Pancakes'],
        rating: 4.9,
        image: 'https://redhousespice.com/wp-content/uploads/2022/01/sliced-peking-duck-with-pancakes-scaled.jpg',
    },
    {
        name: 'Paella',
        origin: 'Spain',
        ingredients: ['Rice', 'Saffron', 'Chicken', 'Seafood', 'Vegetables'],
        rating: 4.7,
        image: 'https://images.immediate.co.uk/production/volatile/sites/30/2018/06/Oven-paella-5d16b06.jpg?resize=768,574',
    },
    {
        name: 'Borscht',
        origin: 'Ukraine',
        ingredients: ['Beets', 'Cabbage', 'Potatoes', 'Carrots', 'Onion'],
        rating: 4.6,
        image: 'https://www.allrecipes.com/thmb/LTMiS5Tk0Uf63rMvtkzwB96Boec=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/84450-ukranian-red-borscht-soup-ddmfs-0266-3x4-hero-890c67fee10b4b0e828f152d22888a56.jpg',
    },
    {
        name: 'Baklava',
        origin: 'Greece',
        ingredients: ['Phyllo Dough', 'Nuts', 'Honey', 'Butter', 'Cinnamon'],
        rating: 4.8,
        image: 'https://gannug.com/wp-content/uploads/2023/07/image_es_1666343863769_Baklavaimg.jpg',
    },
];

const Recipes = () => {
    return (
        <Container className="mt-5">
            <h1 className="text-center mb-4" style={{ color: '#343a40', fontStyle: 'italic' }}  >Delicious Recipes</h1>
            <Row>
                {recipes.map((recipe, index) => (
                    <Col md={3} className="mb-4" key={index}>
                        <Card className="h-100" style={{ backgroundColor: 'pink', borderColor: '#e9ecef' }}>
                            <Card.Img variant="top" src={recipe.image} alt={recipe.name} style={{ height: '200px', objectFit: 'cover' }} />
                            <Card.Body>
                                <Card.Title style={{ color: '#dc3545' }}>{recipe.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Origin: {recipe.origin}</Card.Subtitle>
                                <Card.Text>
                                    <strong>Ingredients:</strong>
                                    <ul>
                                        {recipe.ingredients.map((ingredient, i) => (
                                            <li key={i}>{ingredient}</li>
                                        ))}
                                    </ul>
                                </Card.Text>
                                <Card.Text>
                                    <strong>Rating:</strong> <span style={{ color: 'blue' }}>{recipe.rating} / 5</span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Recipes;
