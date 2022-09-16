import React from "react";
import {Box, Button, HStack, Image, Skeleton, SkeletonText, Text, Wrap, WrapItem} from "@chakra-ui/react";
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
            fetch("http://localhost:1337/api/games?fields=title,description&populate=image&sort=pcReleaseDate:desc")
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
                return (
                    <GameSkeleton />
                );
            } else {
                return (
                    <Wrap spacing={6} m='6' justify="center">
                    {items.map(item => (
                        <WrapItem maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' key={item.id}>
                            <Box p='2'>
                                <Box mt='3' fontWeight='semibold' as='h4' lineHeight='tight' noOfLines={1}>
                                    {item.attributes.title}
                                </Box>
                                <Box my="3" align="center">
                                    <Image borderRadius="md" boxSize="200" objectFit="cover" src={`http://localhost:1337${item.attributes.image.data.attributes.formats.small.url}`} />
                                </Box>
                                <Box>
                                    <Text noOfLines={6}>
                                        {item.attributes.description}
                                    </Text>
                                </Box>
                                <Box py="3">
                                    <Link to={`details/${item.id}`}><Button>Read more</Button></Link>
                                </Box>
                            </Box>
                        </WrapItem>))}
                </Wrap>
                );
            }
        }
    }

    return (<div>
        <Text fontSize="2xl">
        These are the games that went from playstation consoles to PC
        </Text>
        <GameGrid />
    </div>);
}
