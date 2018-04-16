package com.bookk.service;

import java.util.List;

import com.bookk.command.Command;
import com.bookk.domain.Book;

public interface BookMapper {
	// 토탈 카운트
	public int totalCount(Command cmd);
	// 메인페이지 광고이미지 클릭했을때 
	public List<Book> selectMainClickImg(Command cmd);
	// 메인페이지 광고이미지 클릭했을때 나오는 책 갯수
	public int countMainClickImg(Command cmd);
	// 메인페이지 이주의 책
	public List<Book> selectMainWeekRanking(Command cmd);
	// 메인페이지 주간 순위 차트
	public List<Book> selectMainBestWeekRanking(Command cmd);
	// 메인페이지 월간 순위 차트
	public List<Book> selectMainBestMonthRanking(Command cmd);
	// 메인페이지 신간 순위 차트
	public List<Book> selectMainBestNewBookRanking(Command cmd);
	// 메인페이지 책,저자 검색
	public List<Book> selectMainSearch(Command cmd);
	// 메인페이지 대장르 누르는 리스트 보여주는 기능
	public List<Book> selectMainClickLargeGenre(Command cmd);
	// 메인페이지 소장르 누르면 리스트 보여주는 기능
	public List<Book> selectMainClickSmallGenre(Command cmd);
	// 메인페이지 북사진 누르면 책 디테일로 보여주는 기능
	public Book selectMainClickBookImg(Command cmd);
}
