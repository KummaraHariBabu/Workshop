package org.jsp.springboottest.dto;

 import java.util.Optional;

import lombok.Data;

 @Data
public class ResponseStructure<T> {
	private T data;
	private String message;
	private int statusCode;

}
