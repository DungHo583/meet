/* eslint-disable @next/next/no-img-element */

"use client";

import { useStore } from "~/app/HNTW8/store";

export function Footer() {
  const setJoined = useStore((state) => state.setJoined);

  return (
    <div className="footer-meeting">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-center">
            <div className="btn-grid">
              <div className="cursor-pointer">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 640 512"
                  color="gray"
                  height={20}
                  width={20}
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: "gray" }}
                >
                  <path d="M633.82 458.1l-157.8-121.96C488.61 312.13 496 285.01 496 256v-48c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v48c0 17.92-3.96 34.8-10.72 50.2l-26.55-20.52c3.1-9.4 5.28-19.22 5.28-29.67V96c0-53.02-42.98-96-96-96s-96 42.98-96 96v45.36L45.47 3.37C38.49-2.05 28.43-.8 23.01 6.18L3.37 31.45C-2.05 38.42-.8 48.47 6.18 53.9l588.36 454.73c6.98 5.43 17.03 4.17 22.46-2.81l19.64-25.27c5.41-6.97 4.16-17.02-2.82-22.45zM400 464h-56v-33.77c11.66-1.6 22.85-4.54 33.67-8.31l-50.11-38.73c-6.71.4-13.41.87-20.35.2-55.85-5.45-98.74-48.63-111.18-101.85L144 241.31v6.85c0 89.64 63.97 169.55 152 181.69V464h-56c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16z" />
                </svg>
              </div>
              <i className="cursor-pointer">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 320 512"
                  color="gray"
                  height={16}
                  width={16}
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: "gray" }}
                >
                  <path d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z" />
                </svg>
              </i>
            </div>
            <div className="btn-grid">
              <div className="cursor-pointer">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 640 512"
                  color="gray"
                  height={20}
                  width={20}
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: "gray" }}
                >
                  <path d="M633.8 458.1l-55-42.5c15.4-1.4 29.2-13.7 29.2-31.1v-257c0-25.5-29.1-40.4-50.4-25.8L448 177.3v137.2l-32-24.7v-178c0-26.4-21.4-47.8-47.8-47.8H123.9L45.5 3.4C38.5-2 28.5-.8 23 6.2L3.4 31.4c-5.4 7-4.2 17 2.8 22.4L42.7 82 416 370.6l178.5 138c7 5.4 17 4.2 22.5-2.8l19.6-25.3c5.5-6.9 4.2-17-2.8-22.4zM32 400.2c0 26.4 21.4 47.8 47.8 47.8h288.4c11.2 0 21.4-4 29.6-10.5L32 154.7v245.5z" />
                </svg>
              </div>
              <i className="cursor-pointer">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 320 512"
                  color="gray"
                  height={16}
                  width={16}
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: "gray" }}
                >
                  <path d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z" />
                </svg>
              </i>
            </div>

            <div className="box-hr" />
            <div className="btn-rss cursor-pointer">
              <div className="cursor-pointer">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  color="gray"
                  height={20}
                  width={20}
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: "gray" }}
                >
                  <path d="M256 152a104 104 0 1 0 104 104 104 104 0 0 0-104-104zm0 128a24 24 0 1 1 24-24 24 24 0 0 1-24 24zm0-272C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 376a128 128 0 1 1 128-128 128 128 0 0 1-128 128z" />
                </svg>
              </div>
            </div>
            <div
              className="btn-off cursor-pointer"
              onClick={() => setJoined(false)}
            >
              <img src="/iconoff.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
