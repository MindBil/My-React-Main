const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: 'Paslauga 1',
      description: 'XBOX.',
    },
    {
      id: 2,
      title: 'Paslauga 2',
      description: 'PLAYSTATION',
    },
    {
      id: 3,
      title: 'Paslauga 3',
      description: 'NINTENDO',
    },
  ];

  return (
    <div className="Services">
      <h1>PASLAUGOS</h1>
      <div className="card-container">
        {servicesData.map(service => (
          <div className="card" key={service.id}>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
