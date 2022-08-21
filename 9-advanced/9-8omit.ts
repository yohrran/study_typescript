{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  function getVideo(id: string): Video {
    return {
      id,
      title: "videl",
      url: "https//naver.com",
      data: "byte-data...",
    };
  }

  //원하는 타입만 빼내어서 사용하는 것
  type VideoMetaData = Omit<Video, "url" | "data">;

  function getVideoMetadata(id: string): VideoMetaData {
    return {
      id: id,
      title: "title",
    };
  }
}
