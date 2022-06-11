import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import Header from '../components/Header/Index'
import Images from '../public/images/Images'
export default function Explore() {
  const creatorData = [
    {
      image: Images.man,
      text1: 'cuiapp',
    },
    {
      image: Images.avatar,
      text1: 'cuiapp',
    },
    {
      image: Images.monkey,
      text1: 'cuiapp',
    },
  ]

  const collectionData = [
    {
      image: Images.c1,
      image2: Images.cc1,
      title: 'Pixel Apes Collection',
      description: '100x pixel apes! Each one brings you good luck and wealth!',
    },
    {
      title: 'AirCoins',
      description: '100x pixel apes! Each one brings you good luck and wealth!',
    },
    {
      image: Images.c1,
      image2: Images.cc1,
      title: 'Pixel Apes Collection',
      description: '100x pixel apes! Each one brings you good luck and wealth!',
    },
    {
      image: Images.c1,
      image2: Images.cc1,
      title: 'Pixel Apes Collection',
      description: '100x pixel apes! Each one brings you good luck and wealth!',
    },
  ]

  return (
    <>
      <Header />
      <div className="px-12">
        <div>
          <Image src={Images.banner} alt="" />
        </div>

        <Box py={4}>
          <Typography variant="h3" color="white" fontWeight="bold">
            Recommended Creators
          </Typography>
        </Box>
        <Box>
          <Grid container py={4} spacing={3}>
            {creatorData.map((creator, index) => (
              <Grid item xs={12} md={4}>
                <Box
                  sx={{ backgroundColor: '#3d2556' }}
                  className="rounded-2xl"
                >
                  <Box display="flex" p={4}>
                    <Box>
                      <Image
                        src={creator.image}
                        alt=""
                        width="80"
                        height="80"
                        className="rounded-2xl"
                      />
                    </Box>
                    <Box px={4}>
                      <Typography variant="h5" color="white">
                        {creator.text1}
                      </Typography>
                      <Typography variant="subtitle1" color="white">
                        core deve...
                      </Typography>
                      <Typography variant="subtitle1" color="white">
                        Folower: 1
                      </Typography>
                    </Box>
                    <Box>
                      <Button
                        variant="contained"
                        sx={{ background: 'transparent' }}
                      >
                        Follow +
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Box py={4}>
            <Box>
              <Typography variant="h3" color="white" fontWeight="bold">
                Explore Product
              </Typography>
            </Box>
            <Box display="flex">
              <Grid container spacing={3}>
                {collectionData.map((item, index) => (
                  <Grid item xs={12} sm={6} md={3}>
                    <Box py={3}>
                      <Box>
                        <Image
                          src={Images.c1}
                          alt=""
                          className="rounded-t-2xl"
                        />
                      </Box>

                      <Box
                        sx={{ backgroundColor: '#3D2558' }}
                        className="rounded-b-2xl"
                      >
                        <Box
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{
                            transform: 'translateY(-50%)',
                          }}
                        >
                          <Image
                            src={Images.cc1}
                            alt="Image"
                            width="60"
                            height="60"
                            className="rounded-full"
                          />
                        </Box>

                        <Typography
                          variant="h5"
                          textAlign="center"
                          py={2}
                          color="white"
                        >
                          {item.title}
                        </Typography>
                        <Typography variant="subtitle1" p={2} color="white">
                          {item.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
          <Grid container spacing={3}>
            {collectionData.map((item, index) => (
              <Grid item xs={12} sm={6} md={3}>
                <Box py={3}>
                  <Box>
                    <Image src={Images.c1} alt="" className="rounded-t-2xl" />
                  </Box>

                  <Box
                    sx={{ backgroundColor: '#3D2558' }}
                    className="rounded-b-2xl"
                  >
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      sx={{
                        transform: 'translateY(-50%)',
                      }}
                    >
                      <Image
                        src={Images.cc1}
                        alt="Image"
                        width="60"
                        height="60"
                        className="rounded-full"
                      />
                    </Box>

                    <Typography
                      variant="h5"
                      textAlign="center"
                      py={2}
                      color="white"
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="subtitle1" p={2} color="white">
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Grid container spacing={3}>
            {collectionData.map((item, index) => (
              <Grid item xs={12} sm={6} md={3}>
                <Box py={3}>
                  <Box>
                    <Image src={Images.c1} alt="" className="rounded-t-2xl" />
                  </Box>

                  <Box
                    sx={{ backgroundColor: '#3D2558' }}
                    className="rounded-b-2xl"
                  >
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      sx={{
                        transform: 'translateY(-50%)',
                      }}
                    >
                      <Image
                        src={Images.cc1}
                        alt="Image"
                        width="60"
                        height="60"
                        className="rounded-full"
                      />
                    </Box>

                    <Typography
                      variant="h5"
                      textAlign="center"
                      py={2}
                      color="white"
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="subtitle1" p={2} color="white">
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </>
  )
}
