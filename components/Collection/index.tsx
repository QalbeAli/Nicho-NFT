import { Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import Link from 'next/link'
import Images from '../../public/images/Images'

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

export default function Collection() {
  return (
    <>
      <Box px={8}>
        <Box
          py={6}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h4" color="white" fontWeight="bold">
            Recommended Collections
          </Typography>
          <Link href="/view">
            <a>
              <Button variant="contained" sx={{ border: '1px solid white' }}>
                View All
              </Button>
            </a>
          </Link>
        </Box>
        <Box display="flex">
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
      </Box>
    </>
  )
}
