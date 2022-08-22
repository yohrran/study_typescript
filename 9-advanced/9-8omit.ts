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

  //타입을 제외한 것을 사용하는 것, pick과 반대되는 개념
  type VideoMetaData = Omit<Video, "url" | "data" | "h">;

  function getVideoMetadata(id: string): VideoMetaData {
    return {
      id: id,
      title: "title",
    };
  }
}
