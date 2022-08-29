import {Box, Flex, HStack, Divider, Center} from '@chakra-ui/react'
import {Outlet, Link} from "react-router-dom"

function App() {
    return (<div>
        <Box bg='brand.400' color={"whitesmoke"} px={4}>
            <HStack spacing='12px'>
                <Flex h={50} alignItems={'center'}>
                    P2P : Playstation To PC
                </Flex>
                <Center height={'40px'}>
                <Divider orientation='vertical' />
                </Center>
                <Link to="/">Home</Link>
            </HStack>
        </Box> <Box> <Outlet /> </Box>
    </div>);
}

export default App;
