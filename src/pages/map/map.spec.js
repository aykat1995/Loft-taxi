import {render} from '@testing-library/react'
import Map from './mapPage.jsx'
import mapboxgl from "mapbox-gl";
import '@testing-library/jest-dom';

jest.mock("mapbox-gl");

const removeHandle = jest.fn();
const mapImplement = jest.fn(() => ({
  on: jest.fn(),
  remove: removeHandle
}))
mapboxgl.Map.mockImplementation(mapImplement);

describe("Map", () => {
  describe("#MapRender", () => {
    it("Map renders correctly", () => {
      const { container } = render(<Map />);
      expect(container.getElementsByClassName("map__wrapper").length).toBeTruthy();
    })
  });
});