// Array of available nodes to connect to
export const nodes = [
  "https://http-mainnet.cube.network",
  "https://http-mainnet.cube.network",
  "https://http-mainnet.cube.network",
];

const getRandomIndex = () => {
  const lower = 0;
  const upper = nodes.length - 1;
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getNodeUrl = (): string => {
  const randomIndex = getRandomIndex();
  return nodes[randomIndex];
};

export default getNodeUrl;
