import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Select A Song</div>;
  }
  return (
    <div>
      <h3>Detail for:</h3>
      <p>Title: {song.song.title}</p>
      <p>Duration: {song.song.duration}</p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    song: state.selectedSong
  };
};

export default connect(mapStateToProps)(SongDetail);
