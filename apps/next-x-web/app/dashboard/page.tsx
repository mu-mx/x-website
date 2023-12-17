import { getLocalData } from '@/app/lib/localData';

export default async function Page() {
  const data = await getLocalData();
  console.log('data - >:', data);

  return (
    <main>
      666
      <div>
        {data.map((item, index) => (
          <div key={index}>
            <h2>{item.name}</h2>
            <p>{item.age}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
