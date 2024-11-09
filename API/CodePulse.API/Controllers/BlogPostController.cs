using CodePulse.API.Models.Domain;
using CodePulse.API.Models.DTO;
using CodePulse.API.Reposirories.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CodePulse.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogPostController : ControllerBase
    {
        private readonly IBlogPostRepository blogPostRepository;

        public BlogPostController(IBlogPostRepository blogPostRepository)
        {
            this.blogPostRepository = blogPostRepository;
        }

        [HttpPost]
        public async Task<IActionResult> CreateBlogPost([FromBody] CreateBlogPostRequestDto request)
        {
            //Covert DTO to damin modal
            var blogPost = new BlogPost
            {
                Title = request.Title,
                ShortDiscription = request.ShortDiscription,
                Containt = request.Containt,
                FeatureImageUrl = request.FeatureImageUrl,
                UrlHandle = request.UrlHandle,
                PublishedDate = request.PublishedDate,
                Author = request.Author,
                IsVisible = request.IsVisible
            };

            blogPost = await blogPostRepository.CreateAsync(blogPost);

            //convert domain back to DTO
            var responce = new BlogPostDto
            {
                Id = blogPost.Id,
                Title = blogPost.Title,
                ShortDiscription = blogPost.ShortDiscription,
                Containt = blogPost.Containt,
                Author = blogPost.Author,
                IsVisible = blogPost.IsVisible,
                FeatureImageUrl= blogPost.FeatureImageUrl,
                UrlHandle = blogPost.UrlHandle,
                PublishedDate = blogPost.PublishedDate,
            };

            return Ok(responce);
        }
    }
}
