import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import introVideo from '../../assets/videos/intro.mp4'

const CoursePage = () => {

    const [lectureNumber, setLectureNumber] = useState(0);

    const lectures = [{
        _id: "sdnskdjk1",
        title: "sample1",
        description: "sample description1",
        video: {
            url:'kdsdkssk'
        }
    },
    {
        _id: "sdnskdjk2",
        title: "sample2",
        description: "sample description2",
        video: {
            url:'kdsdkssk'
        }
    },
    {
        _id: "sdnskdjk3",
        title: "sample3",
        description: "sample description3",
        video: {
            url:'kdsdkssk'
        }
    }]

  return (
      <Grid
          minH={'90vh'}
          templateColumns={['1fr','3fr 1fr']}
      >
          <Box>
              <video
                controls
                controlsList='nodownload noremoteplayback'
                disablePictureInPicture
                disableRemotePlayback
                src={introVideo}
                width='100%'
              >
              </video>

              <Heading
                  children={`#${lectureNumber + 1} ${lectures[lectureNumber].title}`}
                  m={'4'}
              />
              <Heading
                  children='Description'
                  m={'4'}
              />

              <Text
                  m={'4'}
                  children={lectures[lectureNumber].description}
              />
          </Box>

          <VStack>
              {
                  lectures.map((item, index) => (
                      <button
                          onClick={()=>setLectureNumber(index)}
                          key={item._id}
                          style={{
                              width: "100%",
                              padding: "1rem",
                              textAlign: "center",
                              margin: 0,
                              borderBottom:"1px solid rgba(0, 0, 0, 0.2)"
                          }}
                      >
                          <Text noOfLines={1}>
                              #{index + 1} {item.title}
                          </Text>
                      </button>
                  ))
              }
          </VStack>
    </Grid>
  )
}

export default CoursePage