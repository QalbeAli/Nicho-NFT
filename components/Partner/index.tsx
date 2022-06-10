import { Box } from '@mui/system'
import { Button, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import Images from '../../public/images/Images'
import Link from 'next/link'
export default function Partner() {
  return (
    <>
      <Box px={8} py={4}>
        <Box>
          <Typography variant="h3" fontWeight="bold" color="white">
            Communities & Partners
          </Typography>
        </Box>
        <Box py={4}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={2}>
              <Link href="https://www.web3in.net/">
                <a>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ backgroundColor: '#72519F' }}
                    className="rounded-[3rem]"
                  >
                    <Image src={Images.p1} alt="" />
                  </Box>
                </a>
              </Link>
            </Grid>
            <Grid item xs={12} md={2}>
              <Link href="https://www.taocapital.com.au/">
                <a>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ backgroundColor: '#72519F' }}
                    className="rounded-[3rem]"
                  >
                    <Image src={Images.p2} alt="" />
                  </Box>
                </a>
              </Link>
            </Grid>
            <Grid item xs={12} md={2}>
              <Link href="https://www.digitaljournal.com/pr/nicho-nft-marketplace-bringing-nft-to-daily-life">
                <a>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ backgroundColor: '#72519F' }}
                    className="rounded-[3rem]"
                  >
                    <Image src={Images.p3} alt="" />
                  </Box>
                </a>
              </Link>
            </Grid>
            <Grid item xs={12} md={2}>
              <Link href="https://www.marketwatch.com/press-release/nicho-nft-marketplace-bringing-nft-to-daily-life-2022-04-01">
                <a>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ backgroundColor: '#72519F' }}
                    className="rounded-[3rem]"
                  >
                    <Image src={Images.p4} alt="" />
                  </Box>
                </a>
              </Link>
            </Grid>
            <Grid item xs={12} md={2}>
              <Link href="http://finance.dailyherald.com/dailyherald/news/read/42304957">
                <a>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ backgroundColor: '#72519F' }}
                    className="rounded-[3rem]"
                  >
                    <Image src={Images.p5} alt="" />
                  </Box>
                </a>
              </Link>
            </Grid>
            <Grid item xs={12} md={2}>
              <Link href="https://www.benzinga.com/pressreleases/22/04/ab26425755/nicho-nft-marketplace-bringing-nft-to-daily-life">
                <a>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ backgroundColor: '#72519F' }}
                    className="rounded-[3rem]"
                  >
                    <Image src={Images.p6} alt="" />
                  </Box>
                </a>
              </Link>
            </Grid>
          </Grid>

          <Grid container spacing={2} py={2}>
            <Grid item xs={12} md={2}>
              <Link href="https://www.jinse.com/news/blockchain/1202567.html">
                <a>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ backgroundColor: '#72519F' }}
                    className="rounded-[3rem]"
                  >
                    <Image src={Images.p7} alt="" />
                  </Box>
                </a>
              </Link>
            </Grid>
            <Grid item xs={12} md={2}>
              <Link href="https://www.bnbchain.org/en/smartChain">
                <a>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ backgroundColor: '#72519F' }}
                    className="rounded-[3rem]"
                  >
                    <Image src={Images.p8} alt="" />
                  </Box>
                </a>
              </Link>
            </Grid>
            <Grid item xs={12} md={2}>
              <Link href="https://ethereum.org/en/">
                <a>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ backgroundColor: '#72519F' }}
                    className="rounded-[3rem]"
                  >
                    <Image src={Images.p9} alt="" />
                  </Box>
                </a>
              </Link>
            </Grid>
            <Grid item xs={12} md={2}>
              <Link href="https://polygon.technology/">
                <a>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ backgroundColor: '#72519F' }}
                    className="rounded-[3rem]"
                  >
                    <Image src={Images.p10} alt="" />
                  </Box>
                </a>
              </Link>
            </Grid>
            <Grid item xs={12} md={2}>
              <Link href="https://solana.com/zh">
                <a>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ backgroundColor: '#72519F' }}
                    className="rounded-[3rem]"
                  >
                    <Image src={Images.p11} alt="" />
                  </Box>
                </a>
              </Link>
            </Grid>
            <Grid item xs={12} md={2}>
              <Link href="https://www.avax.network/">
                <a>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ backgroundColor: '#72519F' }}
                    className="rounded-[3rem]"
                  >
                    <Image src={Images.p12} alt="" />
                  </Box>
                </a>
              </Link>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12} md={2}>
              <Link href="https://fantom.foundation/">
                <a>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ backgroundColor: '#72519F' }}
                    className="rounded-[3rem]"
                  >
                    <Image src={Images.p13} alt="" />
                  </Box>
                </a>
              </Link>
            </Grid>
            <Grid item xs={12} md={2}>
              <Link href="https://themagiccoat.com/">
                <a>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ backgroundColor: '#72519F' }}
                    className="rounded-[3rem]"
                  >
                    <Image src={Images.p14} alt="" />
                  </Box>
                </a>
              </Link>
            </Grid>
            <Grid item xs={12} md={2}>
              <Link href="https://virtualcaim.com/portfolio">
                <a>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ backgroundColor: '#72519F' }}
                    className="rounded-[3rem]"
                  >
                    <Image src={Images.p15} alt="" />
                  </Box>
                </a>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  )
}
