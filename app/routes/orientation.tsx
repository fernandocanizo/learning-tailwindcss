export default function Orientation() {
  return (
    <div>
      <div className="portrait:hidden">
        Now you're in portrait mode. Good! :)
      </div>
      <div className="landscape:hidden">
        This experience is designed to be viewed in portrait mode. Please rotate your
        device to view the site.
      </div>
    </div>
  );
}
