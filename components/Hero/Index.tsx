import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import Images from '../../public/images/Images'
import Link from 'next/link'
export default function Hero() {
  return (
    <>
      <Box className="py-[10vh] ">
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <Box>
              <Box>
                <Typography variant="body1" color="#2B34DB">
                  THE BEST MULTI-CHAIN MARKETPLACE
                </Typography>
              </Box>
              <Box>
                <Typography variant="h2" color="white" fontWeight="bold">
                  Mint, Trade and Create Collection to Get Rewards
                </Typography>
              </Box>
              <Box>
                <Typography variant="subtitle1" color="#8C7BC1" className="">
                  Nicho NFT is a multi-chain NFT trading platform, we are highly{' '}
                  <br />
                  focused on creating a high-quality integrated infrastructure
                  for the <br /> web3 field.
                </Typography>
              </Box>
              <Box py={2}>
                <Stack direction="row" spacing={3}>
                  <Link href="/explore">
                    <a>
                      <Button
                        sx={{
                          background:
                            'linear-gradient(to right, #e00089 40%, #0042ff 60%)',
                        }}
                        variant="contained"
                        className="btn"
                      >
                        Explore
                      </Button>
                    </a>
                  </Link>

                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: 'transparent',
                      border: '2px solid #e00089 ',
                    }}
                  >
                    Create
                  </Button>
                </Stack>
              </Box>
              <Box display="flex" py={3}>
                <Stack direction="row" spacing={4}>
                  <Box>
                    <Typography variant="h4" color="white" fontWeight="bold">
                      100
                    </Typography>
                    <Typography color="white" fontWeight="bold">
                      NFTs Minted
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h4" color="white" fontWeight="bold">
                      11
                    </Typography>
                    <Typography color="white" fontWeight="bold">
                      NFTs Sold
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h4" color="white" fontWeight="bold">
                      $484.97
                    </Typography>
                    <Typography color="white" fontWeight="bold">
                      Trading Volume
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box>
              <Box display="flex">
                <Box
                  sx={{
                    justfyContent: 'flex-end',
                    alignItems: 'end',
                  }}
                  className=" hidden   lg:flex"
                >
                  <Image
                    src={Images.h1}
                    width="222"
                    height="230"
                    alt="Images"
                    className="rounded-2xl"
                  />
                </Box>
                <Box px={3} className=" hidden  lg:flex">
                  <Image
                    src={Images.h2}
                    alt="Image"
                    width="242"
                    height="304"
                    className="rounded-2xl"
                  />
                </Box>
              </Box>
              <Box
                py={3}
                className=" hidden  items-center justify-center lg:flex"
              >
                <Image
                  src={Images.h3}
                  alt="Image"
                  width="232"
                  height="230"
                  className="rounded-2xl"
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
