{
  type PageInfo = {
    title: string;
  };

  type Page = "home" | "about" | "contact";

  //묶어주는 역할
  const nav: Record<Page, PageInfo> = {
    home: { title: "name" },
    about: { title: "1" },
    contact: { title: "2" },
  };
}
