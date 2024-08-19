const extractUUIDFromNytUrl = (url: string): string | null => {
  const pattern = /nyt:\/\/article\/([a-f0-9-]{36})/;
  const match = url.match(pattern);

  return match ? match[1] : null;
};

export default extractUUIDFromNytUrl;
