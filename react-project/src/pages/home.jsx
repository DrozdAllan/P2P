import React from "react";
import {Box, Button, HStack, Image, Text, Wrap, WrapItem} from "@chakra-ui/react";
import {Link} from "react-router-dom";

export default function Home() {

    class GameGrid extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                error: null, isLoaded: false, items: []
            };
        }

        componentDidMount() {
            fetch("http://localhost:1337/api/games?populate=image")
                .then(res => res.json())
                .then((result) => {
                    this.setState({
                        isLoaded: true, items: result.data
                    });
                }, (error) => {
                    this.setState({
                        isLoaded: true, error
                    });
                })
        }

        render() {
            const {error, isLoaded, items} = this.state;
            if (error) {
                return <div>Error: {error.message}</div>;
            } else if (!isLoaded) {
                return <div>Loading...</div>;
            } else {
                return (<Wrap spacing={6} m='6' justify="center">
                    {items.map(item => (
                        <WrapItem maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' key={item.id}>
                            <Box p='2'>
                                <Box mb='5' fontWeight='semibold' as='h4' lineHeight='tight' noOfLines={1}>
                                    {item.attributes.title}
                                </Box>
                                <Box align="center">
                                    <Image boxSize="200" objectFit="cover" src={`http://localhost:1337${item.attributes.image.data.attributes.formats.small.url}`} />
                                </Box>
                                <Box>
                                    <Text noOfLines={6}>
                                        {item.attributes.description}
                                    </Text>
                                </Box>
                                <Box py="4">
                                    <Link to={`details/${item.id}`}><Button>Read more</Button></Link>
                                </Box>
                            </Box>
                        </WrapItem>))}
                </Wrap>);
            }
        }
    }

    return (
        <Box style={{padding: "1rem 0", textAlign: "center"}}>
        <Text fontSize="2xl">
        These are the games that went from playstation consoles to PC
        </Text>
        <GameGrid />
    </Box>);
}
