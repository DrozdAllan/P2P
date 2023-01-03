import React from "react";
import {Box, Container, Grid, Image, Skeleton, SkeletonText, Text} from "@chakra-ui/react";
import showdown from "showdown";
import {Helmet} from "react-helmet";

export default class GameComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null, isLoaded: false, item: {}
        };
    }

    componentDidMount() {
        fetch(`${process.env.REACT_APP_GAMES_ENDPOINT}/${this.props.id}?populate=image`)
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
                <Container maxW="8xl" centerContent>
                    <Box maxW='8xl' overflow='hidden'>
                        <Box fontWeight='bold' fontSize="3xl" as='h2' align="center">
                            <SkeletonText noOfLines={1}/>
                        </Box>
                        <Grid templateColumns="repeat(3, 1fr)" gap="6" justifyItems="center" alignItems="center" my="5">
                            <Box fontWeight="bold">Release date on Playstation : 9999-99-99</Box>
                            <Skeleton boxSize="350"/>
                            <Box fontWeight="bold">Release date on PC : 6666-66-66</Box>
                        </Grid>
                        <Box>
                            <SkeletonText noOfLines={6}/>
                        </Box>
                    </Box>
                </Container>
            );
        } else {
            const converter = new showdown.Converter();
            const htmlDesc = converter.makeHtml(item.attributes.description);

            return (

                <Box key={item.id} align="center">
                    <Helmet>
                        <title>P2P - {item.attributes.title}</title>
                    </Helmet>
                    <Box fontWeight='bold' fontSize="3xl" as='h2'>
                        {item.attributes.title}
                    </Box>
                    <Grid templateColumns="repeat(3, 1fr)" gap="6" justifyItems="center" alignItems="center" my="5">
                        <Box fontWeight="bold">Release date on Playstation
                            : {item.attributes.playstationReleaseDate}</Box>
                        <Image borderRadius="md" boxSize="350px" objectFit="cover"
                               src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}/>
                        <Box fontWeight="bold">Release date on PC : {item.attributes.pcReleaseDate}</Box>
                    </Grid>

                    <Container maxW='1050px'>
                        <Text dangerouslySetInnerHTML={{__html: htmlDesc}}/>
                    </Container>
                </Box>
            );
        }
    }
}
