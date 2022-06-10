import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import Images from '../../public/images/Images'
import TwitterIcon from '@mui/icons-material/Twitter'
import GitHubIcon from '@mui/icons-material/GitHub'
import TelegramIcon from '@mui/icons-material/Telegram'
export default function Footer() {
  return (
    <>
      <Box sx={{ backgroundColor: '#1B172D' }}>
        <Box px={8} py={5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Box>
                <Image src={Images.logo} alt="" width="150" height="150" />
              </Box>
              <Box>
                <Typography variant="subtitle1" color="#6E6773">
                  Nicho NFT hopes to establish a large-scale blockchain
                  community through an innovative blockchain product, also, the
                  ownership, governance rights, and economic system rights, and
                  even the whole project rights will be managed by the
                  community. From our founding from the moment of Nicho NFT, the
                  concept of decentralization, Web3, and DAO is closely linked
                  with our project, and the concept of decentralization will
                  lead the trend of the future world pattern.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box>
                <Box>
                  <Typography variant="h4" fontWeight="bold" color="white">
                    Information
                  </Typography>
                </Box>
                <Box>
                  <Stack spacing={2} py={3}>
                    <Link href="https://medium.com/@NichoNFT">
                      <a>
                        <Typography variant="subtitle1" color="#6E6773">
                          Blogs
                        </Typography>
                      </a>
                    </Link>
                    <Link href="">
                      <a>
                        <Typography variant="subtitle1" color="#6E6773">
                          Privacy Policy
                        </Typography>
                      </a>
                    </Link>
                    <Link href="https://nichonft.gitbook.io/nicho-nft-whitepaper/">
                      <a>
                        <Typography variant="subtitle1" color="#6E6773">
                          Whitepaper
                        </Typography>
                      </a>
                    </Link>
                    <Link href="https://github.com/NichoNFT/NichoNFT-Documents/tree/main/Audit%20reports">
                      <a>
                        <Typography variant="subtitle1" color="#6E6773">
                          Audit Report
                        </Typography>
                      </a>
                    </Link>
                    <Link href="">
                      <a>
                        <Typography variant="subtitle1" color="#6E6773">
                          Term & Service
                        </Typography>
                      </a>
                    </Link>
                    <Link href="https://t.me/NichoNFT">
                      <a>
                        <Typography variant="subtitle1" color="#6E6773">
                          Report Artist and Collection
                        </Typography>
                      </a>
                    </Link>
                    <Link href="https://t.me/NichoNFT">
                      <a>
                        <Typography variant="subtitle1" color="#6E6773">
                          NFT Launchpad
                        </Typography>
                      </a>
                    </Link>
                  </Stack>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box>
                <Typography variant="h4" fontWeight="bold" color="white">
                  Contact Us
                </Typography>
              </Box>
              <Box py={5}>
                <Typography variant="subtitle1" color="#6E6773">
                  admin@nichonft.com
                </Typography>
              </Box>
              <Box display="flex">
                <Stack direction="row" spacing={3}>
                  <Link href="https://twitter.com/nichonft">
                    <a>
                      <Box>
                        <TwitterIcon sx={{ color: 'white' }} />
                      </Box>
                    </a>
                  </Link>
                  <Link href="https://t.me/nichonft">
                    <a>
                      <Box>
                        <TelegramIcon sx={{ color: 'white' }} />
                      </Box>
                    </a>
                  </Link>
                  <Link href="https://github.com/NichoNFT">
                    <a>
                      <Box>
                        <GitHubIcon sx={{ color: 'white' }} />
                      </Box>
                    </a>
                  </Link>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  )
}
