/* eslint-disable @next/next/no-img-element */
"use client";

import { useTransition } from "react";
import { assertPeer } from "~/actions";
import { useStore } from "~/app/HNTW8/store";

export function Desktop() {
  const [isPending, startTrasition] = useTransition();
  const name = useStore((state) => state.name);
  const setName = useStore((state) => state.setName);
  const setJoined = useStore((state) => state.setJoined);

  function onJoin() {
    if (name.length === 0) {
      alert("Bạn cần nhập tên để vào phòng.");
      return;
    }

    startTrasition(() => {
      return assertPeer(name);
    });

    setJoined(true);
  }

  return (
    <div className="meet-pending">
      <div className="meet-container">
        <div className="meet-header">
          <div className="meet-back">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 448 512"
              color="white"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: "white" }}
            >
              <path d="M223.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L319.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L393.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34zm-192 34l136 136c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9L127.9 256l96.4-96.4c9.4-9.4 9.4-24.6 0-33.9L201.7 103c-9.4-9.4-24.6-9.4-33.9 0l-136 136c-9.5 9.4-9.5 24.6-.1 34z" />
            </svg>
          </div>
          <div className="meet-right">
            <div className="meet-avater">
              <img
                src="/avatar-placeholder.png"
                alt=""
                className="h-10 w-10 rounded-full object-fill aspect-square"
              />
            </div>
          </div>
        </div>
        <div className="meet-modal">
          <div className="meet-modal-container">
            <div className="meet-modal-head">
              <div className="meet-head-left">
                <h3 className="mb-1">
                  HỘI NGHỊ TOÀN QUỐC NGHIÊN CỨU, HỌC TẬP, QUÁN TRIỆT NGHỊ QUYẾT
                  HỘI NGHỊ LẦN THỨ TÁM BAN CHẤP HÀNH TRUNG ƯƠNG ĐẢNG KHÓA XIII
                </h3>
                <div className="meet-head-info">
                  <span className="meet-head-id">ID: 20236666</span>
                  <span className="meet-head-border"> </span>
                  <span className="text-white mr-0.5 ">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 16 16"
                      height={15}
                      width={15}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                    </svg>
                  </span>
                  <p className="mb-0 meet-head-user">{name}</p>
                </div>
              </div>
            </div>
            <div className="meet-background camera-off">
              <div className="meet-avatar-name false">
                <div className="meet-avatar-box">
                  <div
                    className="meet-avatar-image"
                    style={{
                      backgroundImage: 'url("/avatar-placeholder.png")',
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
                <p className="text-white mb-2">
                  Yêu cầu nhập tên tỉnh/thành phố hoặc đơn vị đang công tác
                </p>{" "}
                <div className="meet-user-name">
                  <input
                    type="text"
                    className="w-full"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </div>
              </div>
            </div>
            <div className="meet-action">
              <div className="meet-action-box">
                <div className="meet-action-left">
                  <div className="btn-meet-audio mr-4 true">
                    <div>
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
                        <path d="M633.82 458.1L476.26 336.33C488.74 312.21 496 284.98 496 256v-48c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v48c0 17.92-3.96 34.8-10.72 50.2l-26.55-20.52c3.1-9.4 5.28-19.22 5.28-29.67h-43.67l-41.4-32H416v-32h-85.33c-5.89 0-10.67-3.58-10.67-8v-16c0-4.42 4.78-8 10.67-8H416v-32h-85.33c-5.89 0-10.67-3.58-10.67-8v-16c0-4.42 4.78-8 10.67-8H416c0-53.02-42.98-96-96-96s-96 42.98-96 96v45.36L45.47 3.37C38.49-2.05 28.43-.8 23.01 6.18L3.37 31.45C-2.05 38.42-.8 48.47 6.18 53.9l588.36 454.73c6.98 5.43 17.03 4.17 22.46-2.81l19.64-25.27c5.41-6.97 4.16-17.02-2.82-22.45zM400 464h-56v-33.78c11.71-1.62 23.1-4.28 33.96-8.08l-50.4-38.96c-6.71.4-13.41.87-20.35.2-55.85-5.45-98.74-48.63-111.18-101.85L144 241.31v6.85c0 89.64 63.97 169.55 152 181.69V464h-56c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16z" />
                      </svg>
                    </div>
                    <div className="meet-setting">
                      <div className="meet-text">
                        <h5 className="mb-0">Audio</h5>
                        <p className="mb-0 off">Tắt</p>
                      </div>
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
                    </div>
                  </div>
                  <div className="btn-meet-camera mr-4 false">
                    <div className="null">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 16 16"
                        color="gray"
                        height={20}
                        width={20}
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ color: "gray" }}
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.961 12.365a1.99 1.99 0 0 0 .522-1.103l3.11 1.382A1 1 0 0 0 16 11.731V4.269a1 1 0 0 0-1.406-.913l-3.111 1.382A2 2 0 0 0 9.5 3H4.272l.714 1H9.5a1 1 0 0 1 1 1v6a1 1 0 0 1-.144.518l.605.847zM1.428 4.18A.999.999 0 0 0 1 5v6a1 1 0 0 0 1 1h5.014l.714 1H2a2 2 0 0 1-2-2V5c0-.675.334-1.272.847-1.634l.58.814zM15 11.73l-3.5-1.555v-4.35L15 4.269v7.462zm-4.407 3.56-10-14 .814-.58 10 14-.814.58z"
                        />
                      </svg>
                    </div>
                    <div className="meet-setting">
                      <div className="meet-text">
                        <h5 className="mb-0">Camera</h5>
                        <p className="mb-0 off">Tắt</p>
                      </div>
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
                    </div>
                  </div>
                  <div className="btn-meet-camera mr-4 false">
                    <div>
                      <img
                        src="/iconbackground.svg"
                        className="opacity-50"
                        alt=""
                      />
                    </div>
                    <div className="meet-setting">
                      <div className="meet-text">
                        <h5 className="mb-0">Hình nền</h5>
                        <p className="mb-0 off">Tắt</p>
                      </div>
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
                    </div>
                  </div>
                </div>
                <button
                  className="meet-action-join bg-gray-400"
                  onClick={onJoin}
                  disabled={isPending}
                >
                  <img src="/iconphone.svg" alt="" />
                  {isPending ? <span>Đang xử lý </span> : <span>Tham gia</span>}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
