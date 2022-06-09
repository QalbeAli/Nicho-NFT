import ReactPlayer from 'react-player'
export default function Video() {
  return (
    <div className="flex items-center justify-center py-[8vh]">
      <ReactPlayer url="https://www.youtube.com/watch?time_continue=1&v=sYveB9lzDSE&feature=emb_logo" />
    </div>
  )
}
