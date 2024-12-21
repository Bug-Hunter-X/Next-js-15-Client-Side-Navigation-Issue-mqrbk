```javascript
// pages/aboutSolution.js
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/contact', undefined, { shallow: true }); // Use shallow routing
  };

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleClick}>Go to Contact</button>
    </div>
  );
}
```
By using `shallow:true` in router.push, we enforce that only the query parameters are updated and the page contents are not rerendered unnecessarily. This eliminates unnecessary re-renders, preventing the blank screen issue.  Alternatively, for more complex navigation scenarios, consider using a dedicated routing library like `react-router` to manage client-side transitions.