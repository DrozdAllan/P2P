import React from "react";
import {Box, Button, SimpleGrid, Skeleton, SkeletonText} from "@chakra-ui/react";

export default class gameSkeleton extends React.Component {
    render() {
        const skeletons = [];
        for (let i = 0; i <= 4; i++) {
            skeletons.push(
                <Box p='2' align='center' borderWidth='1px' borderRadius='lg' key={i}>
                    <Skeleton>
                        <Box mt='3' fontWeight='semibold' as='h4' lineHeight='tight' noOfLines="1">
                            <SkeletonText noOfLines={1}/>
                        </Box>
                    </Skeleton>
                    <Box my="3">
                        <Skeleton boxSize="200"/>
                    </Box>
                    <Box>
                        <SkeletonText noOfLines={6}/>
                    </Box>
                    <Box py="3">
                        <Button colorScheme="blue">Read more</Button>
                    </Box>
                </Box>
            );
        }
        return (
            <SimpleGrid minChildWidth='310px' spacing="6" m={["1", "6"]}>
                {skeletons}
            </SimpleGrid>
        );
    }
}
