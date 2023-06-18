import Image from "next/image";

interface Props {
  data: any;
  width: number;
  height: number;
}
const Icon = ({ data, width, height }: Props) => {
  const encodedSvg = encodeURIComponent(data.svg);
  const imgSrc = `data:image/svg+xml,${encodedSvg}`;

  return <Image src={imgSrc} width={width} height={height} alt={data.name} />
};

export default Icon;