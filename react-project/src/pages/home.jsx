import React from "react";
import {Box, Button, Image, SimpleGrid, Text} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import GameSkeleton from "../components/gameSkeleton";

export default function Home() {

    class GameGrid extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                error: null, isLoaded: false, items: []
            };
        }

        componentDidMount() {
            fetch(`${process.env.REACT_APP_GAMES_ENDPOINT}?fields=title,description&populate=image&sort=pcReleaseDate:desc`)
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
                return <Box align='center'>Error: {error.message}</Box>;
            } else if (!isLoaded) {
                return (
                    <GameSkeleton/>
                );
            } else {
                return (
                    <SimpleGrid minChildWidth='310px' spacing="6" m={["1","6"]}>
                        {items.map(item => (
                            <Box p='2' align='center' borderWidth='1px' borderRadius='lg' key={item.id}>
                                <Box mt='3' fontWeight='semibold' as='h4' lineHeight='tight' noOfLines="1">
                                    {item.attributes.title}
                                </Box>
                                <Box my="3">
                                    <Image borderRadius="md" boxSize="200" objectFit="cover"
                                           src={`http://localhost:1337${item.attributes.image.data.attributes.formats.small.url}`}/>
                                </Box>
                                <Box>
                                    <Text noOfLines="6">
                                        {item.attributes.description}
                                    </Text>
                                </Box>
                                <Box py="3">
                                    <Link to={`details/${item.id}`}>
                                        <Button colorScheme="blue">Read more</Button>
                                    </Link>
                                </Box>
                            </Box>
                        ))}
                    </SimpleGrid>
                );
            }
        }
    }

    return (<Box>
        <Text fontSize={['2xl', '3xl']} textAlign="center">
            These are the games that went from playstation consoles to PC
        </Text>
        <GameGrid/>
    </Box>);
}
