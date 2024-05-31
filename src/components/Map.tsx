const Map = () => {
  return (
    <main className="w-full pb-20">
      <iframe
        id="map-iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.493800916483!2d74.92293479999999!3d12.866339399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba358ff28ef6cf3%3A0xe93953598f53c53c!2sSahyadri%20College%20of%20Engineering%20%26%20Management%20(Autonomous)!5e0!3m2!1sen!2sin!4v1635806988908!5m2!1sen!2sin"
        width="100%"
        height="450"
        className="rounded-xl"
        style={{ border: 0 }}
        allowFullScreen
      />
    </main>
  );
};

export default Map;
