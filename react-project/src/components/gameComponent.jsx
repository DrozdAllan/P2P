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
            // TODO: better error display
            return <Box>Error: {error.message}</Box>;
        } else if (!isLoaded) {
            return (
                <Box align="center">
                    <Skeleton height={["24px","30px"]} width="400px" />
                    <Grid templateColumns="repeat(3, 1fr)" gap="6" justifyItems="center" alignItems="center" m="5">
                        <Box fontSize={["xs", "md"]}>Release date on Playstation : <br/> <Skeleton height={["14px","16px"]} width="100px"/></Box>
                        <Skeleton boxSize={["100px", "350px"]} objectFit="cover" borderRadius="md"/>
                        <Box fontSize={["xs", "md"]}>Release date on PC : <br/> <Skeleton height={["14px","16px"]} width="100px"/></Box>
                    </Grid>
                        <Box px="12">
                    <Container maxW='1050px'>
                        <SkeletonText mt='4' noOfLines={6} spacing='4' skeletonHeight='2' />
                    </Container>
                        </Box>
                </Box>
            );
        } else {
            const converter = new showdown.Converter();
            const htmlDesc = converter.makeHtml(item.attributes.description);

            return (

                <Box key={item.id} align="center">
                    <Helmet>
                        <title>P2P - {item.attributes.title}</title>
                    </Helmet>
                    <Box fontSize={['2xl', '3xl']}>
                        {item.attributes.title}
                    </Box>
                    <Grid templateColumns="repeat(3, 1fr)" gap="6" justifyItems="center" alignItems="center" m="5">
                        <Box fontSize={["xs", "md"]}>Release date on Playstation
                            : <br/> {item.attributes.playstationReleaseDate}</Box>
                        <Image borderRadius="md" boxSize={["100px", "350px"]} objectFit="cover"
                               src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}/>
                        <Box fontSize={["xs", "md"]}>Release date on PC : <br/> {item.attributes.pcReleaseDate}</Box>
                    </Grid>

                    <Container maxW='1050px'>
                        <Text dangerouslySetInnerHTML={{__html: htmlDesc}}/>
                    </Container>
                </Box>
            );
        }
    }
}
