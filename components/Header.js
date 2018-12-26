import Link from 'next/link';
import styled from 'styled-components';

const Logo = styled.h1`
  color: ${props => props.theme.colors.black};
  a {
    color: ${props => props.theme.colors.black};
    text-decoration: none;
  }
`;

const Bar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 120px;
  align-items: center;
  background: ${props => props.theme.colors.orange};
`;
const Header = () => (
  <div>
    <Bar>
        <Link href="/">
          <a>
            <svg className="icon icon-coco">
              <use xlinkHref="#icon-coco" />
            </svg>
          </a>
        </Link>
    </Bar>
  </div>
)

export default Header;