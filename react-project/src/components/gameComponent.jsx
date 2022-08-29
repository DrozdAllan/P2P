import React from "react";
import {Box, Container, Flex, HStack, Image, Skeleton, Spacer, Text} from "@chakra-ui/react";

export default class GameComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null, isLoaded: false, item: {}
        };
    }

    componentDidMount() {
        fetch(`http://localhost:1337/api/games/${this.props.id}?populate=image`)
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    isLoaded: true, item: result.data
                });
            }, (error) => {
                this.setState({
                    isLoaded: true, error
                });
            })
    }

    render() {
        const {error, isLoaded, item} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return (
                <Box maxW='sm' m="5" borderWidth='1px' borderRadius='lg' overflow='hidden' key={item.id}>
                    <Box p='2'>
                        <Box mb='5' fontWeight='semibold' as='h4' lineHeight='tight' noOfLines={1}>
                            <Skeleton height="2" />
                        </Box>
                        <Box>
                                <Skeleton height="5" />
                        </Box>
                    </Box>
                </Box>
            );
        } else {
            return (
                <Container maxW="4xl" centerContent>
                <Box maxW='xl' overflow='hidden' key={item.id}>
                        <Box mb='5' fontWeight='bold' fontSize="3xl" as='h2' align="center">
                            {item.attributes.title}
                        </Box>
                    <Box align="center">
                        <Image boxSize="450px" src={`http://localhost:1337${item.attributes.image.data.attributes.url}`} />
                    </Box>
                    <Flex justify="space-between" my="5">
                        <Box fontWeight="bold">Release date on Playstation : {item.attributes.playstationReleaseDate}</Box>
                        <Box fontWeight="bold">Release date on PC : {item.attributes.pcReleaseDate}</Box>
                    </Flex>
                        <Box align="center">
                            <Text>
                                {item.attributes.description}
                            </Text>
                        </Box>
                </Box>
                </Container>
                    );
        }
    }
}
