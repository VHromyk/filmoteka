// масиив жанров
import genreID from '../JS/genreID';

// изменяет  жанр  и дату
function changeGenreData(filmsData) {
  filmsData.map(item => {
    let newGenre = [];
    item.genre_ids.map(id => {
      const found = genreID.find(item => item.id === id);
      newGenre.push(found.name);
    });
    if (item.release_date) {
      item.release_date = item.release_date.slice(0, 4);
    }
    if (newGenre.length >= 4) {
      const manyGenres = newGenre.slice(0, 3);
      item.genre_ids = manyGenres.join(', ');
    } else {
      item.genre_ids = newGenre.join(', ');
    }
    return item;
  });
}

// в зависимости от viewport оствляет необходимое количество элементов
function changeNumberOfItem(filmsData) {
  let newFilmsData = [];
  if (document.documentElement.clientWidth < 768) {
    newFilmsData = filmsData.slice(0, 4);
  }
  if (
    document.documentElement.clientWidth >= 768 &&
    document.documentElement.clientWidth < 1024
  ) {
    newFilmsData = filmsData.slice(0, 8);
  }
  if (document.documentElement.clientWidth >= 1024) {
    newFilmsData = filmsData.slice(0, 9);
  }
  return newFilmsData;
}

export { changeGenreData, changeNumberOfItem };