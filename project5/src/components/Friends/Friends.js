import { Link, Outlet } from "react-router-dom";
import './Friends.css';

export default function Friends() {
  const friends = ['Akira', 'Kaneki', 'Linda'];

  return (
    <section>
      <h1>
        Friends page
      </h1>

      <main className="friends">
        <ul className="friends-list">
          {friends.map((person) => (
            <li>
              <Link to={`/friends/${person}`}>
                {person}
              </Link>
            </li>
          ))}
        </ul>
        
        <div className="chosen-friend">
          <Outlet/>
        </div>
      </main>
    </section>
  )
}