// import PropTypes from 'prop-types';
import { useFetchItems } from '../../services/CustomFetchItems';
import { LoaderSpiner } from '../Loader/Loader';

import { StyledLink, Ul, Li, H1 } from './HomePage.styled';

export default function HomePage() {
  const { items, loading } = useFetchItems();

  return (
    <main>
      <H1>Trending today</H1>
      {loading && <LoaderSpiner />}
      <Ul>
        {items.map(item => (
          <Li key={item.id}>
            <StyledLink to={`/movies/${item.id}`}>
              🎞
              {item.original_title}
            </StyledLink>
          </Li>
        ))}
      </Ul>
    </main>
  );
}

