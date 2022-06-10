import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Images from '../../public/images/Images'
import Image from 'next/image'
export default function Create() {
  const CreateData = [
    {
      title: 'Step-01',
      image: Images.msg,
      des: 'Connect Your Defi Wallet',
      des2: 'Sign the verification process, Nicho NFT has the most secure smart contracts audited by the top auditor organization, to ensure your asset safely.',
    },
    {
      title: 'Step-02',
      image: Images.mint,
      des: 'Mint and Trade',
      des2: 'Depending on the mainnet you are trading on, deposit some Gas into your wallet. For example, BSC uses BNB for gas fees. If you would like to mint your own NFTs.',
    },
    {
      title: 'Step-01',
      image: Images.reward,
      des: 'Get Rewards',
      des2: 'Ready to get $NICHO reward! NichoNFT will regularly reward $NICHO token to every user who trades or mint on the Nicho NFT Marketplace',
    },
  ]

  return (
    <>
      <Box px={8} py={4}>
        <Box>
          <Typography variant="h3" fontWeight="bold" color="white">
            Create and Sell Now
          </Typography>
        </Box>
        <Grid container spacing={3} py={3}>
          {CreateData.map((item, index) => (
            <Grid item xs={12} md={4}>
              <Box
                sx={{ backgroundColor: '#72519F' }}
                className="rounded-xl"
                height="23rem"
              >
                <Box px={2}>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    className="rounded-2xl"
                  >
                    <Box>
                      <Typography variant="h5" color="#926FA3">
                        {item.title}
                      </Typography>
                    </Box>
                    <Box sx={{ transform: 'translate(25%)' }}>
                      <Image src={item.image} alt="" width="126" height="105" />
                    </Box>
                  </Box>
                  <Box py={2}>
                    <Typography variant="h5" fontWeight="bold" color="white">
                      {item.des}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="subtitle1" color="#8C7BC1">
                      {item.des2}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  )
}
