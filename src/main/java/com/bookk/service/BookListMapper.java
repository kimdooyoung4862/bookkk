package com.bookk.service;

import java.util.List;

import com.bookk.command.Command;
import com.bookk.domain.Book;

public interface BookListMapper {
	// 추천도서 리스트
	public List<Book> selectBookListRecommendationBook(Command cmd);
	// 추천도서 클릭
	public Book selectBookListClickRecommendationBook(Command cmd);
	// 
}
