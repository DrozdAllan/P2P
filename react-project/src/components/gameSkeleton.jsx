import React from "react";
import {Box, Button, Skeleton, SkeletonText, Wrap, WrapItem} from "@chakra-ui/react";
import showdown from "showdown";

export default class gameSkeleton extends React.Component {
    render() {
                  return (
                      <Wrap spacing={6} m='6' justify="center">
                          <WrapItem maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                              <Box p='2'>
                                  <Skeleton>
                                      <Box mt='3' fontWeight='semibold' lineHeight='tight' noOfLines={1}>
                                          <SkeletonText noOfLines={1} />
                                      </Box>
                                  </Skeleton>
                                  <Box my="3" px="20" align="center">
                                      <Skeleton boxSize="200" />
                                  </Box>
                                  <Box>
                                      <SkeletonText noOfLines={6} />
                                  </Box>
                                  <Box py="3">
                                      <Button>
                                          Read more
                                      </Button>
                                  </Box>
                              </Box>
                          </WrapItem>
                          <WrapItem maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                              <Box p='2'>
                                  <Skeleton>
                                      <Box mt='3' fontWeight='semibold' lineHeight='tight' noOfLines={1}>
                                          <SkeletonText noOfLines={1} />
                                      </Box>
                                  </Skeleton>
                                  <Box my="3" px="20" align="center">
                                      <Skeleton boxSize="200" />
                                  </Box>
                                  <Box>
                                      <SkeletonText noOfLines={6} />
                                  </Box>
                                  <Box py="3">
                                      <Button>
                                          Read more
                                      </Button>
                                  </Box>
                              </Box>
                          </WrapItem>
                          <WrapItem maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                              <Box p='2'>
                                  <Skeleton>
                                      <Box mt='3' fontWeight='semibold' lineHeight='tight' noOfLines={1}>
                                          <SkeletonText noOfLines={1} />
                                      </Box>
                                  </Skeleton>
                                  <Box my="3" px="20" align="center">
                                      <Skeleton boxSize="200" />
                                  </Box>
                                  <Box>
                                      <SkeletonText noOfLines={6} />
                                  </Box>
                                  <Box py="3">
                                      <Button>
                                          Read more
                                      </Button>
                                  </Box>
                              </Box>
                          </WrapItem>
                          <WrapItem maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                              <Box p='2'>
                                  <Skeleton>
                                      <Box mt='3' fontWeight='semibold' lineHeight='tight' noOfLines={1}>
                                          <SkeletonText noOfLines={1} />
                                      </Box>
                                  </Skeleton>
                                  <Box my="3" px="20" align="center">
                                      <Skeleton boxSize="200" />
                                  </Box>
                                  <Box>
                                      <SkeletonText noOfLines={6} />
                                  </Box>
                                  <Box py="3">
                                      <Button>
                                          Read more
                                      </Button>
                                  </Box>
                              </Box>
                          </WrapItem>
                          <WrapItem maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                              <Box p='2'>
                                  <Skeleton>
                                      <Box mt='3' fontWeight='semibold' lineHeight='tight' noOfLines={1}>
                                          <SkeletonText noOfLines={1} />
                                      </Box>
                                  </Skeleton>
                                  <Box my="3" px="20" align="center">
                                      <Skeleton boxSize="200" />
                                  </Box>
                                  <Box>
                                      <SkeletonText noOfLines={6} />
                                  </Box>
                                  <Box py="3">
                                      <Button>
                                          Read more
                                      </Button>
                                  </Box>
                              </Box>
                          </WrapItem>
                          <WrapItem maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                              <Box p='2'>
                                  <Skeleton>
                                      <Box mt='3' fontWeight='semibold' lineHeight='tight' noOfLines={1}>
                                          <SkeletonText noOfLines={1} />
                                      </Box>
                                  </Skeleton>
                                  <Box my="3" px="20" align="center">
                                      <Skeleton boxSize="200" />
                                  </Box>
                                  <Box>
                                      <SkeletonText noOfLines={6} />
                                  </Box>
                                  <Box py="3">
                                      <Button>
                                          Read more
                                      </Button>
                                  </Box>
                              </Box>
                          </WrapItem>
                      </Wrap>
            );
    }
}
