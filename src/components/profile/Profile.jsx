import { Avatar, Button, Container, Heading, HStack, Image, Stack, Text, useDisclosure, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import ChangePhotoBox from './ChangePhotoBox'

const Profile = ({user}) => {

    const removeFromPlaylistHandler = (id) => {
        console.log(id);
    }

    const changeImageSubmitHandler = (e, image) => {
        e.preventDefault();
    }

    const {isOpen, onClose, onOpen} =useDisclosure()

  return (
      <Container
          minH={'95vh'}
          maxW='container.lg'
          py={'8'}
      >
          <Heading
              children='profile'
              m={'8'}
              textTransform='uppercase'
          />

          <Stack
              justifyContent={'flex-start'}
              direction={['column', 'row']}
              alignItems='center'
              spacing={['8', '16']}
              padding='8'
          >
              <VStack>
                  <Avatar boxSize={'48'} src={user.avatar.url} />
                  <Button
                      colorScheme={'yellow'}
                      variant='ghost'
                      onClick={onOpen}
                  >
                      Change Photo
                  </Button>
              </VStack>

              <VStack
                  spacing={'4'}
                  alignItems={['center','flex-start']}
              >
                  <HStack>
                      <Text
                          children='Name'
                          fontWeight={'bold'}
                      />
                      <Text
                          children={user.name}
                      />
                  </HStack>
                  <HStack>
                      <Text
                          children='Email'
                          fontWeight={'bold'}
                      />
                      <Text
                          children={user.email}
                      />
                  </HStack>
                  <HStack>
                      <Text
                          children='Created At'
                          fontWeight={'bold'}
                      />
                      <Text
                          children={user.createdAt.split('T')[0]}
                      />
                  </HStack>

                  {
                      user.role !== 'admin' && (
                          <HStack>
                              <Text
                                  children='Subscription'
                                  fontWeight={'bold'}
                              />
                              {user.subscription && user.subscription.status === 'active' ? (
                                  <Button
                                      color={'yellow.500'}
                                      variant='unstyled'
                                  >Cancel Subscription</Button>
                              ) : (
                                      <Link to={'/subscribe'}>
                                          <Button colorScheme={'yellow'}>
                                              Subscribe
                                          </Button>
                                      </Link>
                              )}
                          </HStack>
                      )
                  }

                  <Stack
                    direction={['column', 'row']}
                    alignItems='center'
                  >
                      <Link to={'/updateprofile'}>
                          <Button>Update Profile</Button>
                      </Link>
                      <Link to={'/changepassword'}>
                          <Button>Change Password</Button>
                      </Link>
                  </Stack>
              </VStack>
          </Stack>

          <Heading
              children='Playlist'
              size={'md'}
              my='8'
          />

          {user.playlist.length > 0 && (
              <Stack
                  direction={['column', 'row']}
                  alignItems='center'
                  flexWrap={'wrap'}
                  p='4'
              >
                  {
                      user.playlist.map((elem) => (
                          <VStack w={'48'}
                              m='2'
                              key={elem.course}
                          >
                              <Image
                                  boxSize={'full'}
                                  objectFit='contain'
                                  src={elem.poster}
                              />

                              <HStack>
                                  <Link to={`/course/${elem.course}`}>
                                      <Button
                                          variant={'ghost'}
                                          colorScheme='yellow'
                                      >
                                          Watch Now
                                      </Button>
                                  </Link>

                                  <Button onClick={()=>removeFromPlaylistHandler(elem.course)}>
                                      <RiDeleteBin7Fill/>
                                  </Button>
                              </HStack>
                          </VStack>
                      ))
                  }
              </Stack>
          )}

          <ChangePhotoBox
              isOpen={isOpen}
              onClose={onClose}
              changeImageSubmitHandler={changeImageSubmitHandler}
          />
    </Container>
  )
}

export default Profile