"use client";

import { useState } from "react";
import { useStore } from "~/app/HNTW8/store";
import { useInterval } from "~/hooks/use-interval";

export function Header({ streamSource }: { streamSource: string }) {
  const name = useStore((state) => state.name);

  return (
    <div className="header-meet">
      <div className="header-meet-container">
        <div className="header-meet-inner">
          <div className="header-meet-left ">
            <div className="header-left-desc">
              <h3 className="mb-0">
                <span className="header-text">
                  HỘI NGHỊ TOÀN QUỐC NGHIÊN CỨU, HỌC TẬP, QUÁN TRIỆT NGHỊ QUYẾT
                  HỘI NGHỊ LẦN THỨ TÁM BAN CHẤP HÀNH TRUNG ƯƠNG ĐẢNG KHÓA XIII
                </span>
              </h3>
              <div className="header-box-id">
                <h5 className="header-id mb-0">ID: 20236666</h5>
                <PeerCount />
                <span className="icon-span" />
                <h5 className="header-id mb-0">{name}</h5>
                <span className="icon-span" />
                <h5 className="header-id">{extractServerPart(streamSource)}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PeerCount() {
  const peerCount = usePeerCount();

  if (peerCount) {
    return (
      <>
        <span className="icon-span" />
        <h5 className="header-id mb-0 mr-1">Tham dự: </h5>
        <h5 className="header-id mb-0">{peerCount}</h5>;
      </>
    );
  }

  return null;
}

function usePeerCount() {
  const [peerCount, setPeerCount] = useState<number | undefined>();

  useInterval(() => {
    fetch("/api/peer", { cache: "no-store" })
      .then((resp) => resp.json())
      .then((json) => {
        if (json.error) {
          console.log(json.error);
          return;
        }
        setPeerCount(json.peerCount);
      })
      .catch(console.log);
  }, 15000);

  return peerCount;
}

function extractServerPart(url: string) {
  const regex = /https:\/\/(\w+)\.mobifone\.vn\/hls\/stream\.m3u8/;
  const match = url.match(regex);
  if (match) {
    return match[1];
  }
  return "";
}
