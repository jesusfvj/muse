import { List } from "../Components";
import { Carousel } from "../Components/Carousel";
import { Layout } from "../Components/Layout";
import { SongElement } from "../Components/Pages/MainPage/List/ListElement/SongElement";
// import { ListElement } from "../Components/Pages/MainPage/List/ListElement/ListElement";
import { TrendingElement } from "../Components/Pages/MainPage/TrendingList/TrendingElement/TrendingElement";
import { arrayTodaysHits } from "../data/MainPage/MainPage";
import { arrayTrendingList } from "../data/MainPage/TrendingList";

export const Artist = () => {
  return (
    <Layout>
      <div className="w-screen flex flex-col items-center justify-center gap-24 bg-black">
        <div className="w-3/4 h-[30vh]">
          <List
            object={arrayTodaysHits}
            sectionTitle="today hits"
            dataType="song"
            itemsNumber={{
              itemsSuperLarge: 5,
              itemsDesktop: 4,
              itemsTablet: 3,
              itemsMobile: 1,
            }}
          />
        </div>

        <div className="w-3/4 h-[30vh]">
          <Carousel
            itemsSuperLarge={5}
            itemsDesktop={6}
            itemsTablet={3}
            itemsMobile={1}
          >
            <List
              object={arrayTodaysHits}
              sectionTitle="songs"
              dataType="song"
            />
          </Carousel>
        </div>

        <div className="h-[30vh] w-2/3">
          <Carousel
            itemsSuperLarge={5}
            itemsDesktop={4}
            itemsTablet={3}
            itemsMobile={1}
          >
            {arrayTrendingList.map(({ genre, cardColor }, index) => {
              return (
                <TrendingElement
                  key={index}
                  genre={genre}
                  cardColor={cardColor}
                />
              );
            })}
          </Carousel>
        </div>

        <div className="h-[30vh] w-3/4">
          <Carousel
            itemsSuperLarge={5}
            itemsDesktop={4}
            itemsTablet={3}
            itemsMobile={1}
          >
            {arrayTrendingList.map(({ genre, cardColor }, index) => {
              return (
                <TrendingElement
                  key={index}
                  genre={genre}
                  cardColor={cardColor}
                />
              );
            })}
          </Carousel>
        </div>
      </div>
    </Layout>
  );
};
