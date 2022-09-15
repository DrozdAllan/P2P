import React from "react";
import {Box, Container, Flex, Grid, HStack, Image, Skeleton, Spacer, Text} from "@chakra-ui/react";
import showdown from "showdown";

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
                // TODO: proper skeleton when the design is finished
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
            const converter = new showdown.Converter();
            const htmlDesc = converter.makeHtml(item.attributes.description);

            return (
                <Container maxW="8xl" centerContent>
                <Box maxW='8xl' overflow='hidden' key={item.id}>
                        <Box fontWeight='bold' fontSize="3xl" as='h2' align="center">
                            {item.attributes.title}
                        </Box>
                    <Grid templateColumns="repeat(3, 1fr)" gap="6" justifyItems="center" alignItems="center" my="5">
                        <Box fontWeight="bold">Release date on Playstation : {item.attributes.playstationReleaseDate}</Box>
                        <Image boxSize="350px" objectFit="cover" src={`http://localhost:1337${item.attributes.image.data.attributes.url}`} />
                        <Box fontWeight="bold">Release date on PC : {item.attributes.pcReleaseDate}</Box>
                    </Grid>
                    {/*<Flex justify="space-between" my="5">*/}
                    {/*    <Box fontWeight="bold">Release date on Playstation : {item.attributes.playstationReleaseDate}</Box>*/}
                    {/*    <Box fontWeight="bold">Release date on PC : {item.attributes.pcReleaseDate}</Box>*/}
                    {/*</Flex>*/}
                        <Box>
                            <Text dangerouslySetInnerHTML={{ __html: htmlDesc }} />
                        </Box>
                </Box>
                </Container>
                    );
        }
    }
}
