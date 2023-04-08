import { Box, Button, Grid, Heading, HStack, Image, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import Sidebar from '../Sidebar'
import CourseModal from './CourseModal'


const courses = [{
  _id: 'sjdbsjdjdd',
  title: 'React Course',
  category: 'Web Development',
  poster: {
    url: 'https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159__340.jpg',
  },
  createdBy: 'Adil Khursheed',
  views: 123,
  numOfVideos:12,
}]


const AdminCourses = () => {

  const { isOpen, onClose, onOpen } = useDisclosure();

const courseDetailsHandler = (userId) => {
  onOpen();
}
const deleteButtonHandler = (userId) => {
  console.log(userId);
}

const deleteLectureButtonHandler = (courseId, lectureId) => {
  console.log(courseId);
  console.log(lectureId);
}

  const addLectureButtonHandler = (e, courseId, title, description, video) => {
    e.preventDefault();
}

  return (
    <Grid
      minH={'100vh'}
      templateColumns={['1fr','5fr 1fr']}
    >

      <Box
        p={['0', '8']}
        overflowX='auto'
      >
        <Heading
          textTransform={'uppercase'}
          children='All Courses'
          my={'16'}
          textAlign={['center','left']}
        />

        <TableContainer w={['100vw', 'full']}>
          <Table variant={'simple'} size='lg'>
            <TableCaption>All available courses in the database</TableCaption>

            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Poster</Th>
                <Th>Title</Th>
                <Th>Category</Th>
                <Th>Creator</Th>
                <Th isNumeric>Views</Th>
                <Th isNumeric>Lectures</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {courses.map(item => (
                <Row
                  key={item._id}
                  item={item}
                  courseDetailsHandler={courseDetailsHandler}
                  deleteButtonHandler={deleteButtonHandler}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>

        <CourseModal
          isOpen={isOpen}
          onClose={onClose}
          deleteLectureButtonHandler={deleteLectureButtonHandler}
          addLectureButtonHandler={addLectureButtonHandler}
          id={'courseId'}
          courseTitle='React course'
        />
      </Box>

      <Sidebar/>
    </Grid>
  )
}

export default AdminCourses


function Row({item, courseDetailsHandler,deleteButtonHandler}) {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>
        <Image src={item.poster.url}/>
      </Td>
      <Td>{item.title}</Td>
      <Td textTransform={'uppercase'}>{item.category}</Td>
      <Td>{item.createdBy}</Td>
      <Td isNumeric>{item.views}</Td>
      <Td isNumeric>{item.numOfVideos}</Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button
            variant={'outline'}
            color='purple.500'
            onClick={()=>courseDetailsHandler(item._id)}
          >
            View Lectures
          </Button>
          <Button
            color={'purple.600'}
            onClick={()=>deleteButtonHandler(item._id)}
          >
            <RiDeleteBin7Fill/>
          </Button>
        </HStack>
      </Td>
    </Tr>
  )
}