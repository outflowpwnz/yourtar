import { useBemCN } from "shared/hooks";
import './style.scss';

type TProps = {
  url: string;
  poster?: string;
}

export const VideoPlayer = (props: TProps) => {
  const videoPlayerBlock = useBemCN('video-player')
  return (
    <div
      className={videoPlayerBlock()}
    >
      <video
        className={videoPlayerBlock('video')}
        src={props.url}
        controls
        poster={props.poster}
      ></video>
    </div>
  )
}